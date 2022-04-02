const express = require('express')
const { nav } = require("./nav.js")

const PORT = 8080
const app = express()

app.set("view engine", "ejs")

app.use((req, _, next) => {
    console.log("new request on", req.method, req.url);
    next()
})

app.use(express.static('public'))

app.get('/', (_, res) => {
    res.render("home", { nav })
})

app.get("/:name", (req, res) => {
    const pagename = req.params.name

    console.log(nav);
    console.log('pagename', pagename);

    const page = nav.find(p => p.url === "/" + pagename)

    console.log('page', page);
    console.log(page.name.toLowerCase());

    const pname = page.name.toLowerCase()
    res.render(pname, { nav })
})

app.listen(PORT, () => console.log('Server listening on port', PORT))