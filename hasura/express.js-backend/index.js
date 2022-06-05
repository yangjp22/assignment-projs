const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')

const myData = require('./data')

// Development environment
// options = {
//     host: 'localhost',
//     user: 'root',
//     password: '604030',
//     port: '3306',
//     database: 'project'
// }

// Production environment
options = {
    host: 'ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'r1bagvrpqtej143l',
    password: 'if06z8l957g3svh8',
    port: '3306',
    database: 'ft4lvci7iqqd1wgu'
}


let connection = mysql.createConnection(options)
connection.connect();


const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/employees', (req, res) => {
    let sql = 'select * from employees'
    connection.query(sql, (error, results) => {
        if (error) {
            throw error
        } 
        res.send(JSON.stringify(results))
    })
})

app.get('/newtable', (req, res) => {
    let sql = `create table employees (
        employee_id int not null auto_increment,
        firstname varchar(20) default null,
        lastname varchar(20) default null,
        phone_number varchar(20) default null,
        salary decimal(10, 2) default null,
        primary key(employee_id)
    )`

    connection.query(sql, (error, result) => {
        if (error){
            throw error;
        } 
        res.send('Table created...')
    })
})

app.get('/insertion', (req, res) => {
    let sql = `insert into employees (firstname, lastname, phone_number, salary) values`

    myData.forEach((item, index) => {
        if (index == myData.length - 1) {
            sql += `('${item.firstname}', '${item.lastname}', '${item.phone_number}', ${item.salary})`
        } else {
            sql += `('${item.firstname}', '${item.lastname}', '${item.phone_number}', ${item.salary}),`
        }
    })

    connection.query(sql, (error, results) => {
        if (error) {
            throw error
        } 
        res.send('Insert successfully...')
    })
})


app.post('/newemployee', (req, res) => {
    let firstname = req.body['firstname']
    let lastname = req.body['lastname']
    let phone_number = req.body['phone']
    let salary = req.body['salary']

    let sql = 'insert into employees(firstname, lastname, phone_number, salary) values(?, ?, ?, ?)'
    let sqlParams = [firstname, lastname, phone_number, salary]

    connection.query(sql, sqlParams, (error, results, fields) => {
        if (error) {
            throw errow
        } 
        res.send(JSON.stringify(results))
    })
})

app.listen(process.env.PORT || '5050', () => {
    console.log('I am listening 5050 port...')
})