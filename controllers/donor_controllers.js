const donor_model=require("../models/volunteers");

const addDonor=async (req,res)=>{

    if(req.session.user1)
    {
    const create= donor_model.create({
        uname: req.session.username,
        amount: { type: String, required: true},
    })

    if(create) 
    {
        res.render("user_payment");
        `
        <html>
            <body>
                <script>
                    alert("Thank you!");
                </script>
                
            </body>
        </html>
    `

    };

};
}
