const express = require('express');
const router = express.Router();


router.get('/register', (req, res) => { 
    res.send("<h1>I am get request register page</h1>");
    res.sendFile(__dirname+"/views/index.html");
})
module.exports = router;