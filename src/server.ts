import express, { Application } from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import authRoutes from './routes/auth';
import helmet from 'helmet';
import './database';

const app: Application = express();

app.use(morgan('tiny'));
app.use(helmet());
app.use(authRoutes);

app.listen(5600, () => console.log(chalk.blue.inverse("Applikácia beží na porte 5600")))