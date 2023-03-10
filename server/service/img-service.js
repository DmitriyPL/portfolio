import fetch from 'node-fetch';
import fs from "fs";

class ImgService {

    async download (url, path) {
        const res = await fetch(url);
        const fileStream = fs.createWriteStream(path);
        await new Promise((resolve, reject) => {
            res.body.pipe(fileStream);
            res.body.on("error", reject);
            fileStream.on("finish", resolve);
        });
    }
}

export const imgService = new ImgService();