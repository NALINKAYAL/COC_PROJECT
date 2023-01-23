const express = require('express');
const app = express();
const mongoose= require('mongoose');
const path = require('path');
const bodyparser = require('body-parser');
main().catch(err => console.log(err));
mongoose.set('strictQuery', true);
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log("We are connected")
}
app.use(express.static(path.join(__dirname, 'public1')))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.static(path.join(__dirname, 'partials')))
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  desc: String
});

const Contact = mongoose.model('contact', contactSchema);
app.post('/contactus', (req, res)=>{
       var myData = new Contact(req.body);
       myData.save().then(()=>{
          res.send("This item has been saved to the database")
       }).catch(()=>{
          res.status(400).send("Item was not saved to the database")
          
       })
  })

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