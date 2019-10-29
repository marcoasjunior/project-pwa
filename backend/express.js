const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router');

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use('/api', router)

app.listen(3000, (req, res) => {
    console.log('Rodando')
});