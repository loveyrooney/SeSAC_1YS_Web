const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
})

let list = {};

io.on('connection', (socket) => {
    //io.emit('notice', socket.id + '님이 들어왔습니다.');
    socket.on('username', (name) => {
        list[socket.id] = name;
        io.emit('list', list);
        io.emit('notice', name + '님이 들어왔습니다.');
    })

    socket.emit('info', socket.id);

    socket.on('send', (json) => {
        json['from'] = socket.id;
        json['username'] = list[socket.id];
        json['is_dm'] = false;
        if(json.to === '전체') io.emit('newmsg', json)
        else {
            json['is_dm'] = true
            const socketID = (Object.keys(list).find(key => list[key] == json.to))
            io.to(socketID).emit('newmsg', json)
            socket.emit('newmsg', json)
        }
    })

    socket.on('disconnect', () => {
        io.emit('notice', list[socket.id] + "님이 나갔습니다.");
        delete list[socket.id];
        io.emit('list', list);
    })
})

http.listen(8000, () => {
    console.log('server port', 8000);
});