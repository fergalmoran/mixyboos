"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    development: {
        database: {
            mixyboos: {
                database: process.env.POSTGRES_DB,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASS,
                host: process.env.POSTGRES_HOST,
                port: process.env.POSTGRES_PORT,
                dialect: "postgres",
            },
        },
    },
};
exports.default = config;
//# sourceMappingURL=index.js.map