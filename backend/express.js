const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./routes/router')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use('/api', router)

// eslint-disable-next-line no-unused-vars
app.listen(3000, (req, res) => {
    // eslint-disable-next-line no-console
    console.log('Rodando')
})