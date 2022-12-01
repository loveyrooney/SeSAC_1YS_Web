const express = require('express');
const app = express();
const port = 8000; 

app.set('view engine', 'ejs');
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const router = require("./routes"); 
app.use('/visitor', router);               

app.get('*', (req, res)=>{ 
    res.send('error');
});

app.listen(port, ()=>{
    console.log("sever open:", port);
});
