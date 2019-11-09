const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./routes/router')
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')




//SOMENTE USAR PARA CRIAR TABELAS

// const Models = require('./models')
// Models.sequelize.sync({ force: true })


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/api', router)
app.use(serveStatic(path.join(__dirname, '../dist')))


// eslint-disable-next-line no-unused-vars
// app.listen(3000, (req, res) => {
//     // eslint-disable-next-line no-console
//     console.log('Rodando')
// })


var port = process.env.PORT || 3000
app.listen(port)
console.log('ta Rolando ' + port)