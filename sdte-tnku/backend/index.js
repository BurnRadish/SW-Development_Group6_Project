const express = require("express")
const cors = require('cors')
const path = require("path")
const app = express();


app.use(cors())
app.use(express.json())




const { MongoClient } = require("mongodb");
const uri = process.env.mongoDB;

const client = new MongoClient(uri);


app.get("/getcomments/:id", async(req,res,next)=>{
  
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
})

app.listen(9000, () => {
  console.log('Application is running on port 9000')
})