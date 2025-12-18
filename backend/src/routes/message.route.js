import express from "express";

const messageRouter =express.Router();

messageRouter.get("/send", (req, res) => {
  res.send("send message endpoint");
});

messageRouter.get("/receive", (req, res) => {
  res.send("sreceive message endpoint");
});

export default messageRouter;