import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import FormData from "form-data";
import fs from "fs";
import dotenv from "dotenv";

const app = express();
const port = 3000;
const API_URL = "https://api.remove.bg/v1.0/removebg";
dotenv.config(process.env.API_KEY);
const apiKey = process.env.API_KEY;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/remove-bg", async (req, res) => {
    const imageURL = req.body.image_url;

    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_url", imageURL);

    const options = {
        method: 'POST',
        url: API_URL,
        headers: {
            'X-Api-Key': apiKey,
            ...formData.getHeaders(),
        },
        data: formData,
        responseType: 'arraybuffer'
    };

    try {
        const response = await axios.request(options);

        if (response.status === 200) {
            const imageBuffer = Buffer.from(response.data, 'binary');
            fs.writeFileSync("./public/img/no-bg.png", imageBuffer);
            res.render("index.ejs", {
                content: "img/no-bg.png"
            });
        } else {
            res.status(response.status).send(`Error: ${response.statusText}`);
        }
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
