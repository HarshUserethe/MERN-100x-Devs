var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require("mongodb");
const password = "dWu6IfVewo2quvsW";
const cors = require('cors');
 

router.use(cors());

mongoose.connect(`mongodb+srv://useretheharsh074:dWu6IfVewo2quvsW@cluster0.pi17ij2.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Database is connected");
})


const taskSchema = new mongoose.Schema({
  title: String,
  description: String
})


const taskModel = mongoose.model('Task', taskSchema);
 
/* GET home page. */
router.get('/todos',  async function(req, res, next) {
  var todoData = await taskModel.find({});
   res.json(todoData);
});

router.post('/create',  async (req, res) =>{
  const {title, description} = req.body;

  const taskData = new taskModel({
    title: title,
    description: description
  })
  await taskData.save();
  res.json("Task Created Successfuly");
})

//DELETE ROUTE ---->
 router.delete('/todos/:id', async (req, res) => {
 const id = req.params.id;
 const deleteElem = await taskModel.deleteOne({_id: id});
 res.send({message:"Delete task!!"});
 })


module.exports = router;
