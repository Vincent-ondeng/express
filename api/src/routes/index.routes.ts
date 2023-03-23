import { Router } from 'express';
import userAuth from '../../db/auth';
import comments from '../../db/comment';
import posts from '../../db/post';
import user from '../../db/user';
import { verifyToken } from '../../middleware/middlware';

const routes = Router();
routes.get('/', (req, res) => {
  return res.send('Express blog api');
});

routes.post('/users/new', async (req, res) => {
  const { username, defaultIMG, email, password } = req.body;
  const results = await user.new(username, defaultIMG, email, password);
  res.status(201).json(results);
});

routes.post('/users/login', async (req, res) => {
  const { email, password } = req.body;
  const details = await userAuth.login(email, password);
  if (details != null) {
    res.status(200).json(details);
  } else {
    res.status(403).json({ error: 'email or password is incorrect' });
  }
});

routes.get('/users/:id', verifyToken, async (req, res) => {
  const { id } = req.params;

  const results = await user.single(parseInt(id));
  res.status(200).json(results);
});

routes.put('/users/:id/update', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { imgURL, username, userBio } = req.body;
  const results = await user.updateProfile(
    parseInt(id),
    imgURL,
    username,
    userBio
  );
  res.json(results);
});

routes.get('/users/:id/posts/', verifyToken, async (req, res) => {
  const { id } = req.params;
  const results = await posts.singleUser(parseInt(id));

  res.json(results);
});
routes.get('/users/:id/posts/:postID', verifyToken, async (req, res) => {
  const { postID } = req.params;
  const results = await posts.single(parseInt(postID));
  res.status(200).json(results);
});

routes.delete('/users/:id/posts/:postID', verifyToken, async (req, res) => {
  const { postID } = req.params;
  await posts.delete(parseInt(postID));
  res.status(204).json({ message: 'successfully deleted post' });
});
routes.post('/users/:id/posts/new', verifyToken, async (req, res) => {
  const { id } = req.params;
  const { url, title, description, content, category, publish } = req.body;
  const results = await posts.new(
    parseInt(id),
    url,
    title,
    description,
    content,
    category,
    publish
  );
  res.status(201).json(results);
});

routes.post("/comment/new", verifyToken, async(req, res) => {
    const {userID, postID, comment} = req.body;
    const results = await comments.add(userID, postID, comment)
    res.status(201).json(results)
})

routes.get('/feed', async (req, res) => {
  const result = await posts.all();
  res.json(result);
});

routes.get('/feed/:id', async (req, res) => {
  const { id } = req.params;
  const results = await posts.single(parseInt(id));
  res.json(results);
});

export default routes;
