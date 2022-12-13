const Sequelize = require("sequelize");
const config = require("../config/config.json")["mile"];

const db = {};

const sequelize = new Sequelize(  //config파일(데이터베이스기본정보)를 커넥션하는 작업
    config.database,  
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db.Visitor = require("./Visitor")(sequelize,Sequelize);
/* sequelize는 config를 불러온 거고, Sequelize는 시퀄라이즈 패키지를 불러온 것
모델정의에서 config파일을 define하기 위해, Seuelize는 시퀄라이즈의 함수를 쓰려고. */
//db.Member = require("./Member")(sequelize,Sequelize);
db.User = require("./User")(sequelize,Sequelize);
db.Trip = require("./Trip")(sequelize,Sequelize);

module.exports = db;