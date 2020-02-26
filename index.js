const express = require("express")
const morgan = require("morgan")
const fs = require("fs")
const path = require("path")

const app = express()

const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'))

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan("combined", { stream: accessLogStream }))

app.get("/", (req, res) => {
    res.render("index", {activeNav: 'about'})
})

app.get("/work", (req, res) => {
    res.render("work", {activeNav: 'work'})
})

app.listen(port, () => console.log(`Server running on port ${port}!`))