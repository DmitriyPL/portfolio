import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import path from "path";
import cors from "cors";
import fs from 'fs';
import https from 'https';

import { router } from "./router/index.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";



const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use("/static", express.static(path.join(path.resolve(), 'static')));
app.use(errorMiddleware);

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(path.resolve(), '../app', 'build')));
    app.get('*', (req, res) => {
        console.log(process.env.CLIENT_URL);
        console.log('send bundle')
        res.sendFile(path.resolve(path.resolve(), '../app', 'build', 'index.html'))
    })
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("DB connected");
    if (process.env.NODE_ENV === 'production') {
        const options = {
            key: fs.readFileSync('./ssl/dplotitsyn-key.pem'),
            cert: fs.readFileSync('./ssl/dplotitsyn.pem'),
        };
        https.createServer(options, app).listen(PORT, () => console.log(`Server start on port ${PORT}`));
    } else {
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
    }
}).catch( e => console.log(e));