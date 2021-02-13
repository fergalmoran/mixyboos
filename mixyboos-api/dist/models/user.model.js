"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("mysql://root:asd123@localhost:3306/mydb");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    slug: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: true,
    },
}, {
    tableName: "users",
    sequelize,
});
exports.default = User;
//# sourceMappingURL=user.model.js.map