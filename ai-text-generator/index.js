const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const { options } = require('./options')

// set a view engine
app.set('view engine', 'ejs')

app.use("/lib",express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello world...')
})

app.get('/form', (req, res) => {
    res.render('forms');
})

app.post('/form', (req, res) => {
    let problem = options['problem'][req.body['problem']]
    console.log(problem)
    let city = req.body['city']
    console.log(city)
    let location = options['location'][req.body['location']]
    console.log(location)
    let time = options['time'][req.body['time']]
    console.log(time)
    let injured = options['injured'][req.body['injured']]
    console.log(injured)
    let incidence = options['incidence'][req.body['incidence']]
    console.log(incidence)
    let witness = options['witness'][req.body['witness']]
    console.log(witness)
    let recording = options['recording'][req.body['recording']]
    console.log(recording)
    let feeling = options['feeling'][req.body['feeling']]
    console.log(feeling)
    let otherinfo = req.body['otherinfo']
    console.log(otherinfo)
    
    res.render('results', {
        age: req.body['age'],
        occupation: req.body['occupation'],
        name: req.body['firstname'] + ' ' + req.body['lastname'],
        address: req.body['addr1'] + ', ' + req.body['addr2'],
        city,
        problem,
        location,
        time,
        injured,
        incidence,
        witness,
        recording,
        feeling,
        otherinfo
    })
})

app.listen(3030, () => {
    console.log('I am listening...')
})