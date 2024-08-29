const register_model=require("../models/volunteers");

const volun=async (req,res)=>{
const body=req.body;
const create= await register_model.create({
    username: body.username,
    project_name: body.project_name,
    time: body.time,
    reference: body.reference,
    why: body.why,
});
if(create)
{
    res.redirect("/volunteer");
}

};


const volun1=async (req,res)=>{
    const body=req.body;
    const create= await register_model.create({
        username: body.username,
        project_name: body.project_name,
        time: body.time,
        reference: body.reference,
        why: body.why,
    });
    if(create)
    {
        res.send(`
            <html>
                <body>
                    <script>
                        alert("Thank you!");
                    </script>
                    
                </body>
            </html>
        `);
    }
    
    };
    

module.exports={volun, volun1};