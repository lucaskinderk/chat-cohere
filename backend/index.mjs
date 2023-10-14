import cohere from "cohere-ai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendRequest } from "./controller/querie.mjs";

cohere.init("6Du88xd4Cy6uTrWtU2vHzpviyjdZjDyTMon1MA9T");

const response = await cohere.generate({
  model: "command",
  prompt: "Hola, buenas!",
  max_tokens: 300,
  temperature: 0.9,
  k:0,
  stop_sequences: [],
  return_likelihoods: "NONE",

});

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/request", sendRequest);

app.get("/api", (req, res) => {
  res.send({ status: "Server is OK" });
});

app.listen(PORT, () => {
  console.log("Server is running on port: http://localhost:" + PORT);
});