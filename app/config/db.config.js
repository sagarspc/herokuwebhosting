module.exports = {
  HOST: "184.168.114.28",
  USER: "root",
  PASSWORD: "",
  DB: "testdb_suraj",
  port:"3306",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
