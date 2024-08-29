const register_model=require("../models/volunteers");
const {projects, event, inventory}=require("../models/admin");

const fetch_volunteer = async (req, res) => {
    try {
      // Fetch all users from the collection
      const user = await register_model.find({});
      
      // Render the 'users' view, passing the users data
      res.render("volunteer", {user})
    } catch (error) {
      res.status(500).send('Error fetching users: ' + error.message);
    }
  };


const fetch_projects = async (req, res) => {
    try {
      // Fetch all users from the collection
      const project1 = await projects.find({});
      
      // Render the 'users' view, passing the users data
      res.render("section", {project1});
    } catch (error) {
      res.status(500).send('Error fetching users: ' + error.message);
    }
};


const fetch_items = async (req, res) => {
    try {
      // Fetch all users from the collection
      const users = await inventory.find({});
      
      // Render the 'users' view, passing the users data
      res.render("inventory", {users});
    } catch (error) {
      res.status(500).send('Error fetching users: ' + error.message);
    }
};


const fetch_event = async (req, res) => {
    try {
      // Fetch all users from the collection
      const event1 = await event.find({});
      res.render("section", {event1});
      // Render the 'users' view, passing the users data
      
    } catch (error) {
      res.status(500).send('Error fetching users: ' + error.message);
    }
};

const add_project = async (req, res) => {
  try {
      const projec = req.body;
      const new_project = await projects.create({
          project_name: projec.project_name,
          project_description: projec.project_description,
          volunteers: projec.volunteers,
      });
      if (new_project) {
          res.redirect("/section");
      } else {
          res.status(500).send('Failed to create project');
      }
  } catch (error) {
      res.status(500).send('Error adding project: ' + error.message);
  }
};


const add_to_inventory=async (req, res)=>{
    const body=req.body;
    const new_item=await inventory.create({
        item: body.item,
        quantity: body.quantity,
        event:body.event,
    
    })
    if(new_item)
      return res.redirect("/admininventory");
}

const add_event = async (req, res) => {
  try {
      const body = req.body;
      const new_event = await event.create({
          event_name: body.event_name,
          event_description: body.event_description,
          date: body.date,
          venue: body.venue,
          volunteers: body.volunteers,
      });
      if (new_event) {
          res.redirect("/section");
      } else {
          res.status(500).send('Failed to create event');
      }
  } catch (error) {
      res.status(500).send('Error adding event: ' + error.message);
  }
};


const fetchData = async (req, res) => {
  try {
      // Fetch all projects and events from the collections
      const projectsData = await projects.find({});
      const eventsData = await event.find({});

      // Render the 'section' view, passing both projects and events data
      res.render("section", { project1: projectsData, event1: eventsData });
  } catch (error) {
      res.status(500).send('Error fetching data: ' + error.message);
  }
};




      

  

module.exports={fetch_volunteer, fetch_projects,fetch_event,fetch_items,fetchData, add_project, add_event, add_to_inventory};