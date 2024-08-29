const { register } = require("module");
const register_model=require("../models/register");
const bcrypt = require('bcrypt');


  
  const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };

  const createUser= async (req, res)=>{
        const body=req.body;
        if(body.password!=body.confirm_password)
        {
            return res.json({msg: "Passwords are not matching :/"});
        }
        else
        {
            try{
                const hashed_password=await hashPassword(body.password);

                const new_user=await register_model.create({
                    first_name: body.first_name,
                    last_name: body.last_name,
                    gender: body.gender,
                    age: body.age,
                    city: body.city,
                    phno: body.phno,
                    username: body.username,
                    email: body.email,
                    password: hashed_password
                }) 
                return res.json({msg: "user created"});
            }
            catch(err){
                console.log(err);
                return res.status(400).json({msg: "User not created"});
            }

        }
  }




  const login = async (req, res) => {
    const body = req.body;
    const username_or_password = body.field1;
    const password1 = body.password;

    try {
        const user = await register_model.findOne({
            $or: [
                { email: username_or_password },
                { username: username_or_password }
            ]
        });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password1, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Incorrect password" });
        }

        // Set session variables
        //req.session.userId = user._id;
        //req.session.username = user.username;
        //req.session.email = user.email;
        req.session.user1 = {username: user.username, email:user.email, id:user._id };

        // Check if the user is the admin
        if (user.username === "admin" && password1 === "admincomes") {
            return res.render("adminlol", { user: user.username });
        }

        // Regular user login successful
        //return res.status(200).json({ message: 'Login successful' });
        return res.redirect("/user_dash");

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Login unsuccessful' });
    }
};

const logout=async (req,res)=>{

    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Unable to log out');
        }
        res.render("user_dash");
    });
}


  module.exports={createUser, login, logout};
  