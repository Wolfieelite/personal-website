import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const PORT = process.env.PORT;

//very first route
app.get("/", (req, res) => {
  res.send("Welcome to the Index server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
