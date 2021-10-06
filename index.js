const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req, res)=>{
    res.send("Home page")
})

app.post('/post',(req, res)=>{
    res.send("Posted")
})

app.put('/put',(req, res)=>{
    res.send("Updated")
})

app.delete('/delete',(req, res)=>{
    res.send("Deleted")
});

app.listen(port, ()=>{
    console.log(`Your server is running at http://localhost:${port}`)
})