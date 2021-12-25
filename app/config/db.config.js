module.exports = {
  HOST: "siddhiaquarium.in",
  USER: "root",
  PASSWORD: "born2surajSQL",
  DB: "testdb_suraj",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
