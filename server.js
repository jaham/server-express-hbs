const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'))

//express hbs engine (motor template)
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


const port = process.env.PORT || 3000

app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'Jaham'
    })
})

app.get(`/about`, (req, res) => {
    res.render('about.hbs')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})