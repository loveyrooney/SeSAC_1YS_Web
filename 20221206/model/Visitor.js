/*시퀄라이즈는 테이블을 자바스크립트 문법으로 모델 정의를 해줘야 실행가능
인자가 세개 들어온다. 테이블이름, 컬럼정의, 모델 옵션 정의*/
const Visitor = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "visitor", //테이블 이름
        { //컬럼정의
            id: { //id int not null primary key auto_increment
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: { //name varchar(10) not null
                type: DataTypes.STRING(10),
                allowNull: false
            },
            comment: { //comment mediumtext
                type: DataTypes.TEXT("medium")
            }
    
        },
        { //모델 옵션 정의
            tableName: "visitor",
            freezeTableName: true, //자동으로 테이블이름이 복수형태 되는거 방지
            timestamps: false, // 허용하려면 default true createdAt updatedAt
            //그 외 collate, charset 등 
        }
    )
}

module.exports = Visitor;
