const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/router');

const app = express();

const {User} = require('./models');
const {Event} = require('./models');
const {Preference} = require('./models');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/api', routes);

// User.create({
//     name: 'Marco',
//     email: 'marco@rocketseat.com.br',
//     password: '123456'
// });






app.listen(3000, (req, res) => {
    console.log('Rodando')
});