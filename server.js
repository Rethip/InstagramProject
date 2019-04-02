const express = require ('express');//creating a refernce (pointer to a library)
const app = express(); // create an instance
const mongoose = require ('mongoose');
const db = require ('./config/keys').MongoURI;//to read mongodb
const users = require ('./api/users');
const profile = require ('./api/profile');
const posts = require ('./api/posts');


//connect to db
 mongoose.connect(db)
  .then(()=>console.log("mongo db connected"))
  .catch((err=>console.log(err)));




//let's write our route
app.get ('/', (req,res)=> res.send ('helloW!'));

app.use ('/api/users',users);
app.use ('/api/profile',profile);
app.use ('/api/posts',posts);

const port = process.env.Port || 5210;
app.listen(port,() => console.log(`server running on port ${port}`)); //listen to request