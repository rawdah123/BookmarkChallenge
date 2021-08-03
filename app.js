const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:true }))

app.get('/', (req, res) => {
    res.render('index.ejs', {
        name: req.body.name,
        url: req.body.url,
        comment: req.body.comment
    })
})

app.post('/', (req, res) => {
    res.render('index.ejs', {
        name: req.body.name,
        url: req.body.url,
        comment: req.body.comment
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})