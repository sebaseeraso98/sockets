//var socket = io.connect('http://localhost:8081',{'forceNew':true});
//var socket = io.connect('http://192.168.1.8:8081',{'forceNew':true});
//var socket = io.connect('http://10.254.193.112:8081',{'forceNew':true});
//var socket = io.connect('http://10.150.13.18:8081',{'forceNew':true});
var socket = io.connect('http://209.182.218.174:8081',{'forceNew':true});

var mensajes=[ 'Leer Valor ADC' ];

socket.on('MCUEventClient',function(data){
 console.log(data);
  mensajes.push(data)
  render(mensajes);
});

socket.on('signalclient',function(data){
  console.log(data);
  mensajes.push(data)
  render(mensajes);
});
socket.on('Datonuevo',function(data){
  console.log(data);
  var msg = `Dato: ${data.datos[data.datos.length -1 ] } Fecha: ${data.fecha[data.fecha.length -1 ] }`
  mensajes.push(msg)
  render(mensajes);

});


/*function render(data) {

    //console.log(data)

    var html = `<div>
            <strong>Mensaje MCU</strong>:
            <em>${data}</em>
            <em> </em>
            </div>`

    document.getElementById('messages').innerHTML = html;
} */

function render(data) {
    console.log(data)
    var html = data.map( function(elem,index){
      return(`<div>
              <strong>Mensaje MCU</strong>:
              <em>${elem}</em>
              </div>`);
           }).join(" ");
    document.getElementById('messages').innerHTML = html;
}
