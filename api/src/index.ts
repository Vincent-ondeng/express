import express from "express";
import { resolve } from "path";
import userAuth from "../db/auth";
import posts from "../db/post";
import user from "../db/user";
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.post("/users/new", async (req, res) => {
  const { email, username, password } = req.body;
  const results = await user.new(email, username, password);
  res.status(201).json(results);
});

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await userAuth.login(email, password);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(403).json({ error: "email or password is incorrect" });
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const results = await user.single(parseInt(id));
  res.status(200).json(results);
});

app.get("/users/:id/posts", async (req, res) => {
  const { id } = req.params;
  const results = await posts.singleUser(parseInt(id));

  res.json(results);
});
app.get("/users/:id/posts/:postID", async (req, res) => {
  const { id, postID } = req.params;
  const results = await posts.single(parseInt(postID));
  res.status(200).json(results);
});

app.post("/users/:id/posts/new", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const results = await posts.new(parseInt(id), title, content);
  res.status(201).json(results);
});

app.delete("/users/:id/posts/:postID", async (req, res) => {
  const { id, postID } = req.params;
  await posts.delete(parseInt(postID));
  res.status(204).json({ message: "successfully deleted post" });
});

app.get("/users/:id/posts/drafts", async (req, res) => {
  const { id } = req.params;
  const results = await posts.drafts(parseInt(id));
  res.json(results);
});

app.get("/feed", async (req, res) => {
  const result = await posts.all();
  res.json(result);
});

app.get("/feed/:id", async (req, res) => {
  const { id } = req.params;
  const results = await posts.single(parseInt(id));
  res.json(results);
});

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
