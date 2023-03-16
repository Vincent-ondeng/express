import { Router } from 'express';
import userAuth from '../../db/auth';
import posts from '../../db/post';
import user from '../../db/user';

const routes = Router();

routes.post('/users/new', async (req, res) => {
  const { email, username, password } = req.body;
  const results = await user.new(email, username, password);
  res.status(201).json(results);
});

routes.post('/users/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await userAuth.login(email, password);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(403).json({ error: 'email or password is incorrect' });
  }
});

routes.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  const results = await user.single(parseInt(id));
  res.status(200).json(results);
});

routes.get('/users/:id/posts/live', async (req, res) => {
  const { id } = req.params;
  const results = await posts.singleUser(parseInt(id));

  res.json(results);
});
routes.get('/users/:id/posts/live/:postID', async (req, res) => {
  const { id, postID } = req.params;
  const results = await posts.single(parseInt(postID));
  res.status(200).json(results);
});

routes.post('/users/:id/posts/new', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const results = await posts.new(parseInt(id), title, content);
  res.status(201).json(results);
});

routes.delete('/users/:id/posts/live/:postID', async (req, res) => {
  const { id, postID } = req.params;
  await posts.delete(parseInt(postID));
  res.status(204).json({ message: 'successfully deleted post' });
});

routes.get('/users/:id/posts/drafts', async (req, res) => {
  const { id } = req.params;
  const results = await posts.drafts(parseInt(id));
  res.json(results);
});

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
