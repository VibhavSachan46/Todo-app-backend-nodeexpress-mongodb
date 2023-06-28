const express = require("express");
const router = express.Router();

//import controller
const{createTodo} = require("../controllers/createTodo");
const{getTodo, getTodoById} = require("../controllers/getTodo");
const{updateTodo} = require("../controllers/updateTodo");
const{DeleteTodo} = require("../controllers/DeleteTodo");


//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/DeleteTodo/:id", DeleteTodo);

module.exports = router;