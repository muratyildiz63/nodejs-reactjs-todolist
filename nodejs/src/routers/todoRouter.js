const router = require("express").Router()
const { todoAdd, todoGetAll, todoUpdate, todoDelete, todoGet } = require("../controllers/todoController")

router.post("/todo", todoAdd)
router.get("/todo", todoGetAll)
router.get("/todo/:id", todoGet)
router.delete("/todo/:id", todoDelete)
router.put("/todo/:id", todoUpdate) // put güncelleme için kullanılır

module.exports = router