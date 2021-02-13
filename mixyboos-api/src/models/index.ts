import { Dialect, Sequelize } from "sequelize";
import config from "../config";
import User from "./user.model";

console.log(
    "models/index",
    "connecting with",
    config.development.database.mixyboos
);
let db = new Sequelize(
    config.development.database.mixyboos.database,
    config.development.database.mixyboos.username,
    config.development.database.mixyboos.password,
    {
        host: config.development.database.mixyboos.host,
        port: (config.development.database.mixyboos.port as unknown) as number,
        dialect: "postgres",
    }
);

export { db, User };
