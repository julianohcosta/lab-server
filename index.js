import express from "express";
import * as dotenv from "dotenv";
import exampleRouter from './routes/example.routes'

dotenv.config();

const app = express();
app.use(express.json());

app.use("/example", exampleRouter);

app.listen(Number(process.env.PORT),()=>{
    console.log("Server on port 8080!");
});