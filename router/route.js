import express from 'express'
//import bodyParser  from 'body-parser';
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log('Welcome in node world, Have a great day');
})
app.listen(PORT, (req,res)=>{console.log('Now I am fullStack developer')})