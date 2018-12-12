//var socket = io.connect('http://192.168.1.8:8081',{'forceNew':true});
var socket = io.connect('http://209.182.218.174:8081',{'forceNew':true});

var decimal_data = [];
for (var x = 0; x <= 100; x += 1) {
  decimal_data.push({
    x: x,
    y: 0
  });
}

var morris1 = new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'ECG',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
data: decimal_data,

  // The name of the data record attribute that contains x-values.
  xkey: 'x',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['y'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value'],
  parseTime: false,
  lineWidth: 1,
  resize: true
});

var morris2 = Morris.Donut({
  element: 'Temp',
  data: [
    {value: 37, label: 'Temperatura'},
    {value: 100-37, label:'Presion'}
  ],
  backgroundColor: '#ccc',
  labelColor: '#060',
  colors: [
    '#0BA462',
    '#39B580',
    ],
  formatter: function (x) {
    if (x >= 55){
      return x + "PSI"
    }
    else {
      return x + "°C"
    }
  }
});
var decimal_data3 = [];
for (var x = 0; x <= 100; x += 1) {
  decimal_data3.push({
    x: x,
    y: 0
  });
}

var morris3 = new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'EEG',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
data: decimal_data3,

  // The name of the data record attribute that contains x-values.
  xkey: 'x',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['y'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value'],
  parseTime: false,
  lineWidth: 1,
  resize: true
});

var morris4 = Morris.Donut({
  element: 'Frecuencia',
  data: [
    {value: 30, label: 'Temperatura'},
    {value: 100-30, label:'Presion'}
  ],
  backgroundColor: '#ccc',
  labelColor: '#060',
  colors: [
    '#0BA462',
    '#39B580',
    ],
  formatter: function (x) {
    if (x >= 55){
      return x + "PSI"
    }
    else {
      return x + "°C"
    }
  }
});



//$("#Bot").on("click", function(){
  socket.on('Datonuevo',function(data) {
  //console.log(morris1)
  var i;
  var decimal_data2 = [];
  for (var x = 0; x <= 100; x += 1) {
    decimal_data2.push({
      x: x,
      y: data.datos[data.datos.length -100+x]
    });
  }
    var NewData = decimal_data2;
    //console.log(i);
  morris1.setData(NewData);

    var NewData2 = [
      {value: data.temp[data.temp.length-1], label: 'Temperatura'},
      {value: data.presion[data.presion.length-1], label:'Presion'}
    ];
morris2.setData(NewData2);
});
