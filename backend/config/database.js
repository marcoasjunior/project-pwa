// module.exports = {
//   username: 'root',
//   password: 'root',
//   database: 'dbeventos',
//   host: 'localhost',
//   dialect: 'mysql',
// }

// ATIVAR QUANDO QUISER USAR O BANCO ONLINE
 
module.exports = {
  username: 'nuhpa68ij2ww1jzy',
  password: 'ns5yihb54sidikg7',
  database: 'gb18rjtcz6zwty36',
  host: 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  ssl: true,
  dialectOptions: {
    useUTC: false, //for reading from database
    dateStrings: true,
    typeCast: true
},
  timezone: '-03:00' //for writing to database
}