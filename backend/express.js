const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/api', router);

// User.create({
//     name: 'Marco',
//     email: 'marco@rocketseat.com.br',
//     password: '123456'
// });

app.listen(3000, (req, res) => {
    console.log('Rodando')
});