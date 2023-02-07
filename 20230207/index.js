const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

//클라이언트 소켓과 연결할 서버 내의 뉴 소켓
io.on('connection', (socket) => {
    console.log('server socket connected', socket.id);
    socket.emit('welcome', {msg: 'welcome'});
    socket.on('response', (str) => {
        console.log(str);
    })
    
    //실습
    socket.on('hello', (str) => {
        console.log(str);
        socket.emit('hello', {msg: 'hello : 안녕하세요!'});
    })
    
    socket.on('study', (str) => {
        console.log(str);
        socket.emit('study', {msg: 'study : 공부합시다!'});
    })
    
    socket.on('bye', (str) => {
        console.log(str);
        socket.emit('bye', {msg: 'bye : 안녕히가세요!'});
    })
    
    //선생님 정답
    let data = {hello: '안녕하세요', study:'공부합시다', bye:'안녕히가세요'}
    socket.on('send', (msg) => {
        console.log(msg)
        socket.emit('response', msg + ':' + data[msg])
    })

    socket.on('disconnect', () => {
        console.log('server socket disconnected', socket.id);
    })
})

http.listen(8000, () => {
    console.log('server port', 8000);
})
