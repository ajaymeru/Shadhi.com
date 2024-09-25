const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
require("./DB/connection")
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})
const userroutes = require("./routes/userRoutes")

app.use("/api/v1/users", userroutes)

const port = 4000
app.listen(port, () => {
    console.log(`connected to http://localhost:${port}/`);
})
