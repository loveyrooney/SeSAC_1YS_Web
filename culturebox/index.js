const express = require('express');
const app = express();
const http = require('http').Server(app);
const api = require('./naver');

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api', api.naver);

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(8000, () => {
    console.log('server port', 8000);
});