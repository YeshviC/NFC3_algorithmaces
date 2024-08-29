  /*
  const login=async (req,res)=>{

    const body=req.body;
    const username_or_password=body.field1;
    const password1=body.password;

    const user = await register_model.findOne({
        $or: [
          { email: username_or_password },
          { username: username_or_password }
        ]
      });

    if(!user)
    {
        return res.json({msg: "user not found"});
    }
    else
    {


        const isPasswordValid = await bcrypt.compare(body.password, user.password);
        if(!isPasswordValid)
        {
            return res.json({msg: "incorrect password"});
        }
        else
        {
          
            try{
            req.session.userId = user._id;
            req.session.username = user.username;
            req.session.email=user.email;

            if(user.username==="admin" && user.password==="admincomes"){
                try{
                res.render("admincomes", {user: user.username});
                }
                catch(err){
                    console.log(err);
                }

             }


            return res.status(200).json({ message: 'Login successful' });
            }
            catch(err){

                return res.status(500).json({ message: 'Login unsuccessful' });
            }
        
        }
    }

    

  };
  */