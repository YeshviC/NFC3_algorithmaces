const mongoose=require("mongoose");
const express=require("express");
const controller_authentication=require("./controllers/register_controller");


const controllers_volunteers=require("./controllers/volunteers_controller");
const controllers_admin=require("./controllers/admin_controllers");

const controllers_donor=require("./controllers/donor_controllers");

const app = express();
const session = require('express-session');


// Session middleware configuration
app.use(session({
    secret: 'your_secret_key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
  }));

//port name
const port = 3005;

//view engine=ejs
app.set('view engine','ejs')


//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/nfc", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database (MongoDB) connected."))
  .catch(err => console.error("Failed to connect to MongoDB", err));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res)=>{
  res.render("user_dash");
})

app.get("/user_about", (req,res)=>{
  res.render("user_about");
})

app.get("/user_dash", (req,res)=>{
  if(req.session.user1)
    console.log(req.session.user1);
    res.render("user_dash", {user1: req.session.user1});
});

app.get("/user_volunteer", (req,res)=>{
  if(req.session.user1)
    console.log(req.session.user1);
    res.render("user_volunteer", {user1: req.session.user1});
});

app.get("/user_donation", (req,res)=>{
  if(req.session.user1)
    console.log(req.session.user1);
    res.render("user_donation");
});

app.get("/user_payment", (req,res)=>{
  if(req.session.user1)
    console.log(req.session.user1);
    res.render("user_payment");
});

app.post("/volun_register", controllers_volunteers.volun1);

app.post("/payhere", controllers_donor.addDonor);

app.post("/register", controller_authentication.createUser);

app.post("/login", controller_authentication.login);

app.post("/data/add", controllers_volunteers.volun);

app.post("/projects/add", controllers_admin.add_project);

app.post("/events/add", controllers_admin.add_event);

app.post("/inventory/add", controllers_admin.add_to_inventory);

app.get("/showVolun", controllers_admin.fetch_volunteer);

app.get("/showProj", controllers_admin.fetch_projects);

app.get("/user_login", (req,res)=>{
    res.render("user_login");
});

app.get("/user_logout", controller_authentication.logout);

app.get("/user_register", (req,res)=>{
  res.render("user_register");
});

app.get("/admininventory", controllers_admin.fetch_items);


app.get("/showEvent", controllers_admin.fetch_event);

app.get("/volunteer", controllers_admin.fetch_volunteer);

app.get("/section", controllers_admin.fetchData);

app.get("/user_event", controllers_admin.fetchData1);


//server chalu
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
