/*
	Amiriki's Web Execution Engine
	t.me/amirikii for queries & requests <3
	
	Made for Sero users
*/

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
var Code = "";

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log("[*] Received GET request to home page!")
  res.send("Access current code using the /code endpoint!")
})

app.get('/code', (req, res) => {
    console.log(`[+] Received GET request to current code endpoint from IP ${req.ip}!`)
    res.send(Code)
});

app.post('/api/code', (req, res) => {
  console.log(`[+] Received POST request to update code endpoint from IP ${req.ip}`)
  Code = decodeURIComponent(req.body.code).replace(/\+/g, " ");

  res.send('[+] Code received!');
});

app.listen(port, () => {
  console.log(`[*] Express.js server started on port ${port}; awaiting requests.`)
});

















































