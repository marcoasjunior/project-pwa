const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./routes/router')
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')
const port = process.env.PORT || 3000

//SOMENTE USAR PARA CRIAR TABELAS

// const Models = require('./models')
// Models.sequelize.sync({ force: true })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/api', router)
app.use(serveStatic(path.join(__dirname, '../dist')))
app.use(serveStatic(path.join(__dirname, '../frontend/public')))

app.listen(port)

console.log('Rolando na ' + port)