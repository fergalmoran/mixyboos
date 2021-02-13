"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.db = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const user_model_1 = __importDefault(require("./user.model"));
exports.User = user_model_1.default;
let db = new sequelize_1.Sequelize(config_1.default.development.database.mixyboos.database, config_1.default.development.database.mixyboos.username, config_1.default.development.database.mixyboos.password, {
    host: config_1.default.development.database.mixyboos.host,
    port: config_1.default.development.database.mixyboos.port,
    dialect: 'postgres',
});
exports.db = db;
//# sourceMappingURL=index.js.map