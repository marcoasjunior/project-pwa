

app.post('/register', async (req, res) => { //nao funcionando
    const user = await User.create(req.body);
    res.json(user);
  });

app.get('/users/:id', (req, res) => {}); //Listar todos
  
app.get('/events/:id', (req, res) => {}); //Buscar
