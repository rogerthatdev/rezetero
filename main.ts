// @ts-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";
import { rezetero } from "./agent.ts";

const app = express();

app.get("/", async (req, res) => {
  const placeholder = await rezetero("hello world");
  res.send(placeholder);
});


app.listen(8001);
