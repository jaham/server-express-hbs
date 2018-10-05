const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')
const { connection } = require('./config/db')


app.use(express.static(__dirname + '/public'))

//express hbs engine (motor template)
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


const port = process.env.PORT || 3000

app.get('/', async(req, res) => {

    connection.connect();

    connection.query('SELECT * FROM usuarios', async(error, results, fields) => {
        if (error) throw 'bueno' + error;

        res.render('home.hbs', {
                nombre: 'jaham',
                users: results
            })
            //res.send(JSON.stringify(results))
            //console.log('The solution is: ', results[0]);
    });

    connection.end();

})


app.get(`/admin`, (req, res) => {
    res.render('admin.hbs')
})

app.get(`/servicios`, (req, res) => {
    res.render('servicios.hbs')
})


app.get(`/about`, (req, res) => {
    res.render('about.hbs')
})

app.get(`/boostraTemplate`, (req, res) => {
    res.render('boostraTemplate.hbs')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})