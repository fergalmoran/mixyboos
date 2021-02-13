import { Router } from "express";
import { userController } from "../controllers";

const router = Router();

router.get("/:id", userController.getUser);

export default router;
