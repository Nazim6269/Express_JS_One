const express = require('express');
const app = express();
const userRouter = require('./routes/users.route');


app.use("/api/user",userRouter);

app.use('/', (req, res) => { 
    res.send("<h1>I am get request at home page</h1>");
})


app.use((req, res) => {
    res.send("<h1> 404 Not Found</h1>");
})

// app.post("/", (req, res) => {
//     res.send("I am post request");
// })

// app.put("/", (req, res) => {
//     res.send("I am put request");
// })

// app.delete("/", (req, res) => {
//     res.send("I am delete request")
// })
module.exports = app;