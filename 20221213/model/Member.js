const Member = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "member", 
        { 
            id: { //id varchar(15) not null primary key
                type: DataTypes.STRING(15),
                allowNull: false,
                primaryKey: true,
            },
            pw: { //pw varchar(15) not null
                type: DataTypes.STRING(15),
                allowNull: false
            },
            name: { //name varchar(5)
                type: DataTypes.STRING(10)
            }
    
        },
        {
            tableName: "member",
            freezeTableName: true, //자동으로 테이블이름이 복수형태 되는거 방지
            timestamps: false, // 허용하려면 default true createdAt updatedAt
            //그 외 collate, charset 등 
        }
    )
}

module.exports = Member;
