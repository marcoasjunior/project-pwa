const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const {User} = require('./models');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// User.create({
//     name: 'Wow',
//     email: 'wow@rocketseat.com.br',
//     password: '123456'
// });

app.post('/register', async (req, res) => { //nao funcionando
    const user = await User.create(req.body);
    res.json(user);
  });

app.get('/users/:id', (req, res) => {}); //Listar todos
  
app.get('/events/:id', (req, res) => {}); //Buscar


app.listen(3000, (req, res) => {
    console.log('Rodando')
});