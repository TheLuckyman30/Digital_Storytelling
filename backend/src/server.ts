import express, { Request, Response } from "express";
import { google } from "googleapis";
import { JWT } from "google-auth-library";
import cors from "cors";
import dotenv from "dotenv";
import https from "https"; 
import fs from "fs"; 

const backend = express();
const PORT = 3001;
dotenv.config();

backend.use(cors());

const FILE_KEY = process.env.SERVER_KEY_PATH;
const CRT_PATH = process.env.SERVER_CRT_PATH;

const options = {
  key: fs.readFileSync(FILE_KEY ? FILE_KEY : ''), // Path to the private key file
  cert: fs.readFileSync(CRT_PATH ? CRT_PATH : ''), // Path to the certificate file
};

https.createServer(options, backend).listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});

const SCOPES = ["https://www.googleapis.com/auth/documents.readonly"];
const KEY_PATH = process.env.MYPATH;

backend.get("/", async (req: Request, res: Response) => {
  const auth = new JWT({
    keyFile: KEY_PATH,
    scopes: SCOPES,
  });

  const document = google.docs({
    version: "v1",
    auth: auth,
  });

  const myDoc = await document.documents.get({
    documentId: "1hV9vn0l1r1j0b7Y1yRd2HjtMLaGhwBuh1BHHTTsL2J8",
  });

  res.send(myDoc.data.body);
});

