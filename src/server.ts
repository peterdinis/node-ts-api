import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';

const app = express();

app.use(morgan('tiny'));
app.listen(5600, () => console.log(chalk.green.inverse("Applikácia beží na porte 5600")))