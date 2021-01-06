import mongoose from 'mongoose';
import chalk from 'chalk';

mongoose.connect('mongodb+srv://peter:aaaaaa1@cluster0.59piy.mongodb.net/NodeTsApp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => {
    console.log(chalk.green.inverse('Connected to db: '));
}).catch(err =>{
    console.log(chalk.red.inverse('Err: ' + err));
});