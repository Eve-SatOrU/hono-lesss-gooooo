import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express !');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express with TypeScript server running on http://localhost:${PORT}`);
});

