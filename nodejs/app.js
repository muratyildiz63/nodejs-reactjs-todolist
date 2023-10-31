const express = require("express")
const app = express()
var cors = require('cors')
require("dotenv").config()
require("./src/config/db")
app.use(cors())
const port = process.env.PORT || 5001
const todoRouter = require("./src/routers/todoRouter")
app.use(express.json()) //body den gelen verileri bununla okuyoruz
app.use("/api", todoRouter)




app.listen(port, () => {
    console.log(`Server ${port} port run`)
})