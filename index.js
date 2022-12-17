const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public1')))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'partials')))


app.set('view engine','ejs');
app.set('views',path.join(__dirname, '/views'));

app.get('/home', (req,res) => {
    res.render('home')
})
app.get('/aboutus', (req,res) => {
    res.render('aboutus')
})

app.get('/stream', (req,res) => {
    res.render('stream')
})
app.get('/suggestions', (req,res) => {
    res.render('suggestions')
})
app.get('/contactus', (req,res) => {
    res.render('contactus')
})

app.listen(5500, () => {
    console.log("LISTENING ON PORT 5500")
})