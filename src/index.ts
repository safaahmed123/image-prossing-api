import express, { Application, Request, Response } from 'express'

const app:Application=express();

const port=3000;

app.get('/', (req: Request, res: Response) => {
    res.json({
      message: 'Hello World 🌍'
    })
  });

app.listen(port, () => {
    console.log(`Server is starting at port http://localhost:${port}`)
  })
export default app;


