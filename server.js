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

app.get('/', (req, res) => {

    connection.connect();

    connection.query('SELECT * FROM oc_user', function(error, results, fields) {
        if (error) throw 'bueno' + error;

        res.render('home.hbs', {
                nombre: 'jaham',
                results
            })
            //res.send(JSON.stringify(results))
            //console.log('The solution is: ', results[0]);
    });

    connection.end();

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