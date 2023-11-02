import express from 'express';
import { BankAccountRoutes } from './controller/BankAccountRoutes';
import mongoose from 'mongoose';

const app = express();
const port = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.use(express.json())

app.use("/BankAccounts", BankAccountRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});