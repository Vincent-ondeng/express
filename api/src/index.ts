import express from "express";
import user from "../db/user";
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.post("/users/new", async (req, res) => {
  const { email, username, password } = req.body;
  const results = await user.new(email, username, password);
  res.json(results);
});

app.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await user.login(email, password);

  if (result) {
    res.status(200).json(result);
  } else {
    res.status(403).json({ error: "email or password is incorrect" });
  }
});

app.get("/users", async (req, res) => {
  const result = await user.all();
  res.json(result);
});

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
