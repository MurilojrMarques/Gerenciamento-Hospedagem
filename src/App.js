import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import path from 'path';

class App{
    constructor(){
        this.server = express();

        mongoose.connect('mongodb+srv://devhouse:devhouse@housegenerate.95bqr9a.mongodb.net/devhouse?retryWrites=true&w=majority&appName=HouseGenerate', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

export default new App().server;