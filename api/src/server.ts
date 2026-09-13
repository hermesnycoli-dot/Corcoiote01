import Express from "express";
import userRouter from './routes/user.route.ts';

const server = Express();

server.use(Express.json());

server.use('/users', userRouter);

server.listen(3000);