import express from "express";
import morgan from "morgan";
import helmet from "helmet";

import fs from "fs";
import path from "path";
import routes from "./routes";
import { db } from "./models";

const app = express();
const accessLogStream = fs.createWriteStream(
    path.join(__dirname, "../access.log"),
    { flags: "a" }
);
app.use(helmet());
app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const port = process.env.PORT || "8000";


//ROUTES
app.use("/user", routes.user);

app.use((req, res) => {
    res.status(404).send("404: Page not found");
});

//STARTUP
app.listen(port, () => {
    db.authenticate()
        .then((r) => console.log("index", "Successfully connected to database"))
        .catch((e) => console.error(e));
    return console.log(`Server is listening on ${port}`);
});
