module.exports = {
  HOST: "ecommerce-aqua.herokuapp.com",
  USER: "root",
  PASSWORD: "born2surajSQL",
  DB: "testdb_suraj",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
