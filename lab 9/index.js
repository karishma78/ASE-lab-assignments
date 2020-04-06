const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

// let's first add a /secret api endpoint that we will be protecting
app.get('/secret', (req, res) => {
    res.json({ "message" : "THIS IS SUPER SECRET, DO NOT SHARE!" })
})

// and a /readme endpoint which will be open for the world to see 
app.get('/readme', (req, res) => {
    res.json({ "message" : "This is open to the world!" })
})

app.listen(port, 
    () => console.log(`Simple Express app listening on port ${port}!`))
    const jwt = require('jsonwebtoken');
const fs = require('fs')

// ... our other endpoints

app.get('/jwt', (req, res) => {
    let privateKey = fs.readFileSync('./private.pem', 'utf8');
    let token = jwt.sign({ "body": "stuff" }, "MySuperSecretPassPhrase", { algorithm: 'HS256'});
    res.send(token);
})