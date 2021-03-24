const{Sequelize} = require("sequelize");
const {password, username, database} = require("../secrete/dat")
const sequelize = new Sequelize(database, username, password,{
    host : "localhost",
    dialect : "postgres",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
})
sequelize.authenticate()
.then(result => console.log("connected to db"))
.catch(error => console.log(error))

module.exports = sequelize