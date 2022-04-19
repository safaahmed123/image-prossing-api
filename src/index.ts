import express, { Application, Request, Response } from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from "express-rate-limit";
import errorMiddleware from './middleware/error.middleware';

const app:Application=express();

const port=3000;
app.use(express.json);


app.use(morgan('common'));
app.use(helmet());

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
message:"too many requst "
});

// Apply the rate limiting middleware to all requests
app.use(limiter)

app.post('/',(req:Request ,res :Response)=>{
    res.json({
        message:'hello from post',
        data:req.body,
    });

})

app.get('/', (req: Request, res: Response) => {
    throw new Error('error exist');
    res.json({
      message: 'Hello World 🌍'
    });
  });

  app.use(errorMiddleware);

  app.use((_req:Request,res:Response)=>{
      res.status(404).json({
          message:
          'ohh you are lost '
      });
  });

app.listen(port, () => {
    console.log(`Server is starting at port http://localhost:${port}`)
  })
export default app;


