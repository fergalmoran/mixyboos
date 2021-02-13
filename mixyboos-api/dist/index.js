"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, "../access.log"), { flags: "a" });
app.use(helmet_1.default());
app.use(morgan_1.default("combined", { stream: accessLogStream }));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
const port = process.env.PORT || "8000";
app.use((req, res) => {
    res.status(404).send("404: Page not found");
});
//ROUTES
app.use("/user", routes_1.default.user);
//STARTUP
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map