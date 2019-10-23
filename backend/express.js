const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const {User} = require('./models');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// User.create({
//     name: 'Pedro',
//     email: 'pedro@rocketseat.com.br',
//     password: '123456'
// });

app.listen(3000, (req, res) => {
    console.log('Rodando')
});