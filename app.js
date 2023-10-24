const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT||3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;
const { json } = require("express")
const ejs = require('ejs')

const static_path = path.join(__dirname,'../public')

// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',require('./routes/news'))
app.use(express.json())


app.set('views','./views')


app.listen(port,()=> console.log(`started on port no ${port}`))