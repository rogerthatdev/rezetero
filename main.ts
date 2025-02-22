// @ts-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";
import { rezetero } from "./agent.ts";


const app = express();

app.get("/", (req, res) => {

  const placeholder = "Hello!";
  res.send(rezetero(placeholder));
});


app.listen(8000);
