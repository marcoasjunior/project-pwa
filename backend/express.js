const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./routes/router')
const cors = require('cors')


//SOMENTE USAR PARA CRIAR TABELAS

// const Models = require('./models')
// Models.sequelize.sync({ force: true })


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())
app.use(bodyParser.json())
app.use('/api', router)


// eslint-disable-next-line no-unused-vars
app.listen(3000, (req, res) => {
    // eslint-disable-next-line no-console
    console.log('Rodando')
})