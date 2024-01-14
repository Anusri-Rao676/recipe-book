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
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        data.password = hashedPassword;
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    res.render("recipe.ejs", { username: req.body.username });
    }
});

app.post("/login", async (req, res) => {
    try {
        // Assuming 'collection' is your MongoDB collection
        const check = await collection.findOne({ name: req.body.username });

        if (!check) {
            res.send("Username not found");
            return; // Add a return statement to exit the function early
        }

        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);

        if (isPasswordMatch) {
            // Corrected: Use res.render without a leading '/'
            res.render("recipe.ejs", { username: req.body.username });
        } else {
            res.send("Wrong password");
        }
    } catch (error) {
        // Corrected: Use res.send to send a response, not req.send
        res.send("Error: " + error.message);
    }
});



const port = 5000;
app.listen(port, () => {
    console.log(`Server running: ${port}`);  // Fix string interpolation here
});

