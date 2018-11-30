var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http);

var messages = [
  "hello",
  "welcome",
  "sunny day",
  "nice weather"
]
function randomMessage(){
  return messages[Math.floor(Math.random()*messages.length)]
}

io.on('connection', function(socket){
  console.log('connected');
  setInterval(()=>{
    io.emit('message',randomMessage())
  },2000)
  socket.on('disconnect',()=>{
    console.log('disconnect')
  })
});


app.get('/',(req,res)=>{
  res.send('server app v1.0')
})
app.post('/message',(req,res)=>{
  // 
});

http.listen(3000, function(){
  console.log('listen on *:3000');
})
