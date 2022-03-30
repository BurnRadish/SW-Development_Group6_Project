const express = require("express")
const cors = require('cors')
const path = require("path")
const app = express();


app.use(cors())
app.use(express.json())




/* const { MongoClient } = require("mongodb"); */
const { request } = require("http");
const { response } = require("express");
const uri = process.env.mongoDB;

/* const client = new MongoClient(uri); */

const db = [
  {
    _id: "62309ccb43270366b216774b",
    name: "Sompong",
    comment: "หืมอาหร่อย",
    place_id: "1",
    rating: 4,
  },
  {
    _id: "6230ab9f43270366b216774c",
    name: "Sompee",
    comment: "โอ้ววอร่อย",
    place_id: "2",
    rating: 4,
  },
];

//for testing
app.get("/getcomments", (req, res)=>{
  res.status(200).send(db);
})

app.get("/getcomments/:id", (req, res)=>{
  const taskId = req.params.id;
  const found = db.find(comment => parseInt(comment.place_id) == parseInt(taskId));
  if(!found){
    return res.status(404).send("This place don't have comment or place don't exist.")
  }
  res.status(200).send(found)
})

//for cloud DB
/* app.get("/getcomments/:id", async(req,res,next)=>{
  
  const id = String(req.params.id);
  let result;
  await client.connect()
  const session = client.startSession();
  try{
      result = await client.db("sdte").collection("comment").find({ place_id: id }).toArray();
      if(result.length === 0){
        res.status(204).send('There is no comments found')
      }else{
        res.status(200).send(result)
      }
      
  }catch(error){
      res.status(404)
      console.log(error)
  }
  console.log(result);
}) */

const port = process.env.PORT || 3000;

module.exports = app.listen(port, () => {
  console.log('Application is running on port ' + port)
})
