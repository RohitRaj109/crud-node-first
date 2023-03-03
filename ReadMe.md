1. git init
2. npm init
3. npm i express body-parser nodemon
4. npm i openssl-nodejs
or
5. npm i openssl

.gitignore created 
/node_modules
git rm -r --cached node_modules


open ssl certificate
https://slproweb.com/products/Win32OpenSSL.html
download exe file
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
git installation contain openssl file directory that is :
C:\Program Files\Git\usr\bin\openssl.exe


