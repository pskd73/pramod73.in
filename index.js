const express = require("express")
const morgan = require("morgan")
const app = express()

const port = 3000

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(morgan("combined"))

app.get("/", (req, res) => {
    res.render("index", {activeNav: 'about'})
})

app.get("/work", (req, res) => {
    res.render("work", {activeNav: 'work'})
})

app.listen(port, () => console.log(`Server running on port ${port}!`))