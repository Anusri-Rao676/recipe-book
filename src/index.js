const express = require('express');
const path = require('path'); 
const bcrypt = require('bcrypt');
const collection = require("./config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup')
});

app.get('/recipe', (req, res) => {
    res.render('recipe')
});




app.post("/signup", async (req, res)=>{
    const data = {
        name:req.body.username,
        password: req.body.password
    }

    const existinguser = await collection.findOne({name: data.name});
    if(existinguser){
        res.send("user already exits. please enter another name");
    }
    else{
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    }
});


const port = 5000;
app.listen(port, () => {
    console.log(`Server running: ${port}`);  // Fix string interpolation here
});

