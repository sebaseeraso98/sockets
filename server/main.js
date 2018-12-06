var express= require ('express');
var app = express();
const bodyParser = require('body-parser');
var server=require('http').Server(app);
var io=require('socket.io')(server);
var mongoose = require('mongoose')
const api = require('../routes')
const DispositiveCtrl = require('../controllers/signalECG')

var messages =[{
  id: 1,
  text:"Hola ",
  author:"Mundo"
}];



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/NewPage",express.static(__dirname + "/public/NewPage"));
app.use("/Grafica",express.static(__dirname + "/public/Graficas"));
app.get('/',function (req,res){

  res.status(200).send("Hola");
});

app.use('/api',api)

mongoose.connect('mongodb://localhost:27017/Electro',function(err,res){
    if(err){
      return console.log(`Error al conectar a la base de datos:${err}`);
    }

    console.log('Conexion a la base de datos establecida')


})


io.on('connection',function(socket){
console.log('Alguien se ha conectado con sockets');
socket.emit('messages',messages);


socket.on('new-message',function(data) {
     messages.push(data);
     io.sockets.emit('messages',messages);
    console.log(data);

});
socket.on('new-message2',function(data) {
     messages2.push(data);
     io.sockets.emit('messages2',messages2);
    console.log(messages2);

}); // evento creado

     socket.on('MCUEvent',function(data) {
     console.log(data);
     socket.broadcast.emit('MCUEventClient',data);
});

socket.on('SignalEvent',function(dispositivo) {

     console.log(dispositivo);
     DispositiveCtrl.deletedato(dispositivo,(newdispositivo)=>{
     //io.sockets.emit('signalclient',data);
     })
});

socket.on('Basedatos',function(dispositivo) {
     console.log(dispositivo.data);
     DispositiveCtrl.updatedato(dispositivo,(newdispositivo)=>{
     socket.broadcast.emit('Datonuevo',newdispositivo);

   })
});



});


server.listen(8081,function(){

 console.log('Servidor corriendo en http://localhost:8081');

});
