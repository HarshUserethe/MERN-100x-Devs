var express = require('express');
var router = express.Router();
var list = [];

const mongoose = require('mongoose');
const db = require("mongodb");
const password = "dWu6IfVewo2quvsW";

mongoose.connect(`mongodb+srv://useretheharsh074:dWu6IfVewo2quvsW@cluster0.pi17ij2.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Database is connected");
})

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

const taskSchema = new mongoose.Schema({
  title: String,
  description: String
})

const userModel = mongoose.model('User', userSchema);
const taskModel = mongoose.model('Task', taskSchema);



//middleware 
const userAuthentication = async (req, res, next) => {
  const {email, password} = req.body;
  const isUser = await userModel.findOne({email});
  console.log(isUser)
  if(isUser){
    next();
  }else{
    res.status(403).json({message: "Access denied"});
  } 
}
/* GET home page. */
router.get('/todos',  async function(req, res, next) {

  var todoData = await taskModel.find({});
  res.render('index', {todoData: todoData});
});

router.post('/create',  async (req, res) =>{
  const {title, description} = req.body;

  const taskData = new taskModel({
    title: title,
    description: description
  })
  await taskData.save();
  res.redirect('/todos');
})

router.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const taskDB = list;
  const listIndex = taskDB.findIndex(obj => obj.id === id);
  console.log(taskDB.id);
  if(listIndex !== -1){
    taskDB.splice(listIndex, 1);
    res.redirect("/");
  }else{
    res.send("There is some error deleting task");
  }

})

//user authetication
router.get("/", (req, res) => {
  res.render("register");
})



router.post('/register', async (req, res) => {
  const {email, password} = req.body;
  const regUser = await userModel.findOne({email});

  if(regUser){
    res.status(403).json({message: "User arealdy exsist"});
  }else{
    const user = new userModel({
      email: email,
      password: password,
    })
    await user.save();
    res.redirect('/');
  }
})

router.post('/login',  async (req, res) => {
const {email, password} = req.body;

try {
const authUser = await userModel.findOne({email: email});

if(authUser.email === email && authUser.password === password){
  res.redirect('/todos');
}
} catch (error) {
  res.json({message: "User not found!"})
}

})




module.exports = router;
