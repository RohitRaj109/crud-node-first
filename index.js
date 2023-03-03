import express from 'express'
import bodyParser  from 'body-parser';
import router from './router/route.js';


import cors from 'cors';
import https from 'https';
import fs from 'fs'



//const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const hostname = "127.0.0.1";
//const bodyParser = require("body-parser");
app.use(bodyParser.json());


//app.use(cors());
// app.use(cors({
//     //: ['https://www.section.io', 'https://www.google.com/'], //
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
//     origin: '*'

// }));

app.use(cors());
app.use('/',router);


// app.get('/',(req,res)=>{
//     console.log('Welcome in node world, Have a great day');
//     res.send('Welcome node ! show in browser')
// })


app.listen(PORT,(req,res)=>{
    console.log('Now I am fullStack developer');
    console.log(`Server running at <a href="http://127.0.0.1:8080/">http://${hostname}:${PORT}/</a>`);
})
