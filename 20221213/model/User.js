const User = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "User", 
        { 
            id: { //id varchar(15) not null primary key
                type: DataTypes.STRING(50),
                allowNull: false,
                primaryKey: true,
            },
            pw: { //pw varchar(15) not null
                type: DataTypes.STRING(50),
                allowNull: false
            },
            name: { //name varchar(5)
                type: DataTypes.STRING(128),
                allowNull: false
            },
            mbti_ok: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            auth: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            mbti: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            E: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            I: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            N: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            S: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            F: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            T: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            P: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            J: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
    
        },
        {
            tableName: "User",
            freezeTableName: true, //자동으로 테이블이름이 복수형태 되는거 방지
            timestamps: false, // 허용하려면 default true createdAt updatedAt
            //그 외 collate, charset 등 
        }
    )
}

module.exports = User;
