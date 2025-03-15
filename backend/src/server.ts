import express, { Request, Response } from "express";
import cors from "cors";

const backend = express();
const PORT = 3001;

backend.use(cors());

backend.get("/", (req: Request, res: Response) => {
  res.send("Sus");
});

backend.listen(PORT, () => {
  console.log(`Online!`);
});