import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // For parsing JSON requests

// Define a simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the backend!");
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});