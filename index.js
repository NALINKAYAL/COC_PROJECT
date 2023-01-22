const express = require('express');
const app = express();
const mongoose= require('mongoose');
const path = require('path');
const bodyparser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public1')))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'partials')))
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  email: String,
  desc: String
});

const Contact = mongoose.model('contact', contactSchema);

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
app.post('/contactus', (req, res)=>{
       var myData = new Contact(req.body);
       myData.save().then(()=>{
       res.send("This item has been saved to the database")
       }).catch(()=>{
       res.status(400).send("item was not saved to the databse")
   
 })
  })

app.listen(5500, () => {
    console.log("LISTENING ON PORT 5500")
})