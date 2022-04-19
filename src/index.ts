import express, { Application, Request, Response } from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from "express-rate-limit";

const app:Application=express();

const port=3000;
app.use(express.json);


app.use(morgan('common'));
app.use(helmet());
app.post('/',(req:Request ,res :Response)=>{
    res.json({
        message:'hello from post',
        data:req.body,
    });

})

app.get('/', (req: Request, res: Response) => {
    res.json({
      message: 'Hello World 🌍'
    })
  });

app.listen(port, () => {
    console.log(`Server is starting at port http://localhost:${port}`)
  })
export default app;


