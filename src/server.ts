import express, { Application } from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import authRoutes from './routes/auth';
import helmet from 'helmet';
import './database';
import dotenv from 'dotenv'
dotenv.config();

const app: Application = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use('/api/auth/', authRoutes);

app.listen(process.env.PORT, () => console.log(chalk.blue.inverse("Applikácia beží na porte 5600")))