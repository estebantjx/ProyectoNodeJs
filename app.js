const express = require("express");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv=require('dotenv');
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

const bcryptjs=require('bcryptjs');

const session=require('express-session');
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}))

const connection=require('./database/db');

app.get('/',(req,res)=>{
    res.render('index' , {msg:'Esto es un mensaje que se realizo desde node: '})
})
app.get('/login',(req,res)=>{
    res.render('login' )
})
app.get('/register',(req,res)=>{
    res.render('register' )
})
app.get('/index',(req,res)=>{
    res.render('index' )
})


app.listen(3000, (req,res)=>{
console.log('SERVER RUNNING IN http://localhost:3000')

})



   