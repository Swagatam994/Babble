import express from "express";

const authRouter = express.Router();

authRouter.get("/signup", (req, res) => {
  res.send("signup");
});
authRouter.get("/login", (req, res) => {
  res.send("login");
});
authRouter.get("/logout", (req, res) => {
  res.send("logout");
});
export default authRouter;