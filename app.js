const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
const Donor=require('./models/index.js');
mongoose.connect("mongodb+srv://usman:bloodbank@cluster0.rglhfwl.mongodb.net/?retryWrites=true&w=majority",{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndMOdify:false
}).then(()=>{
console.log("connection successful");
}).catch((err)=>console.log('no connection'+err));
const connection=mongoose.connection;


app.get('/',(req, res) => {
    res.render('register');
    });


app.get("/donors", async (req, res) => { try {
    const donor = await Donor.find({});
    // console.log(donor);
    res.render("donors",{donors:donor})
  } catch (err) {
    console.log(err);}})



app.post("/register", function(req, res){
    const donor = new Donor({
        name:req.body.name,
        address: req.body.address,
        city: req.body.city,
        bloodgroup: req.body.bloodgroup,
        gender: req.body.gender,
        phone: req.body.phno
    });
    donor.save().then(()=>{
        res.redirect('/donors')
    }).catch((err)=>{
        console.log(err);
    })
});


app.listen(3000, () => {
    console.log('Server is running at port 3000');
});