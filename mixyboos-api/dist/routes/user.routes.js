"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = express_1.Router();
router.get("/:id", controllers_1.userController.getUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map