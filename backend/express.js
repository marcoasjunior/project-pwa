const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const {User} = require('./models');
const {Event} = require('./models');
const {Preference} = require('./models');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// User.create({
//     name: 'Wow',
//     email: 'wow@rocketseat.com.br',
//     password: '123456'
// });

// User.hasMany(Event); // Will add userId to Task model
// Event.belongsToMany(Preference)
// Preference.belongsToMany(Event)

app.listen(3000, (req, res) => {
    console.log('Rodando')
});