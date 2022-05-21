 
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;





const uri =`mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.7yzkv.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
      await client.connect();
      const serviceCollection = client.db('client_co').collection('services');
    
  } finally {
    
  }
}
run().catch(console.dir);


app.get('/', async(req,res)=>{
    res.send('clean_co is running')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });