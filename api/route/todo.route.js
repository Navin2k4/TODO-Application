import express from "express";
import {
  createToDo,
  getToDo,
  updateToDo,
  deleteToDo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/todos", createToDo);

router.get("/todos", getToDo);

router.put("/todos/:id", updateToDo);

router.delete("/todos/:id", deleteToDo);

export default router;