const express = require('express');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080'
}));

app.post('/', async (req, res) => {
    const body = req.body;

    const url = body.url;
    const options = body.options;
    
    const apiResponse = await fetch(url, options)
        .then(res => res.json())
        .then(data => { return data });

    res.send(apiResponse);
})

app.listen(3000,() => {
    console.log("Started on PORT 3000");
    })