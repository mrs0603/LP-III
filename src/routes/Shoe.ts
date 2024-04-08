import { Router } from "express";
import { ShoeServiceImpl } from "../services/Shoe.service.impl";
import { ShoeController } from "../controllers/Shoe";
import { ShoeRepository } from "../repos/ShoeRepository";

const router = Router();

const repo = new ShoeRepository();
const service = new ShoeServiceImpl(repo);
const controller = new ShoeController(service);

router.get("/", controller.listShoes);
router.post("/", controller.createShoe);
router.get("/:id", controller.listShoe);
router.delete("/:id", controller.deleteShoe);

export default router;
