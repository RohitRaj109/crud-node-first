import https from 'https';
import fs from 'fs';
import path from 'path';
import express from 'express';
import openssl from 'openssl-nodejs';
const app = express();
app.use('/',(req,res,next)=>{
    res.send('Hello from SSL Server');
});
var ab = openssl('openssl req -config csr.cnf -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout key.key -out certificate.crt');

var s = openssl(['req', '-config', 'csr.conf', '-out', 'CSR.csr', '-new', '-newkey', 'rsa:2048', '-nodes', '-keyout', 'privateKey.key'], (err, buffer)=> {
    console.log(err.toString(), buffer.toString());
    });
const sslServer = https.createServer({
    key:fs.readFileSync(path.join(__dirname,'certificate','cert.pem')),
    cert:fs.readFileSync(path.join(__dirname,'certificate','pca-key.pem'))
},app);
let port = "3443"


sslServer.listen(port, ()=>{
    console.log(`secure server on port ${port}`)
})