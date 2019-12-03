const app = require('express')()
const bodyParser = require('body-parser')
const router = require('./routes/router')
const cors = require('cors')
const path = require('path')
const serveStatic = require('serve-static')

const port = process.env.PORT || 3000
var https_redirect = function(req, res, next) {
  if (process.env.NODE_ENV === 'production') {
      if (req.headers['x-forwarded-proto'] != 'https') {
          return res.redirect('https://' + req.headers.host + req.url);
      } else {
          return next();
      }
  } else {
      return next();
  }
};

app.use(https_redirect);

//SOMENTE USAR PARA CRIAR TABELAS

// const Models = require('./models')
// Models.sequelize.sync({ force: true })


app.use(cors())

// ATIVAR SOMENTE QUANDO FOR PARA PRODUÇÃO

// app.use (function (req, res, next) {
//   if (req.secure) {
//           // request was via https, so do no special handling
//           next();
//   } else {
//           // request was via http, so redirect to https
//           res.redirect('https://' + req.headers.host + req.url);
//   }
// });
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use('/api', router)
app.use(serveStatic(path.join(__dirname, '../dist')))


app.listen(port)

console.log('Rolando na ' + port)