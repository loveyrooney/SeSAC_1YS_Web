const Trip = (Sequelize, DataTypes)=>{
    return Sequelize.define(
        "Trip", 
        { 
            trip_id: { //id varchar(15) not null primary key
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            mbti: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            spot: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING(128),
                allowNull: false,
            },
            info: {
                type: DataTypes.TEXT("long"),
                allowNull: false,
                
            }
    
        },
        {
            tableName: "Trip",
            freezeTableName: true, //자동으로 테이블이름이 복수형태 되는거 방지
            timestamps: false, // 허용하려면 default true createdAt updatedAt
            //그 외 collate, charset 등 
        }
    )
}

module.exports = Trip;
