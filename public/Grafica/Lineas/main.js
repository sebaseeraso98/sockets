var socket = io.connect('http://192.168.1.8:8081',{'forceNew':true});

var morris1 = new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'Prueba',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2008', value: 5 },
    { year: '2009', value: 10 },
    { year: '2010', value: 5 },
    { year: '2011', value: 11 },
    { year: '2012', value: 7 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value'],
  lineWidth: 1,
  resize: true
});
// Use Morris.Area instead of Morris.Line
var morris2 = Morris.Area({
  element: 'Area',
  data: [
    {x: '2010 Q4', y: 3, z: 7},
    {x: '2011 Q1', y: 3, z: 4},
    {x: '2011 Q2', y: 0, z: 1},
    {x: '2011 Q3', y: 2, z: 5},
    {x: '2011 Q4', y: 1, z: 2},
    {x: '2012 Q1', y: 4, z: 4}
  ],
  xkey: 'x',
  ykeys: ['y', 'z'],
  labels: ['Y', 'Z'],
  lineWidth: 1,
  resize: true,
  //lineWidth 1,
});
$("#Bot").on("click", function(){
  console.log(morris1)
  var NewData = [
    { year: '2018', value: Math.random() },
    { year: '2019', value: Math.random() },
    { year: '2011', value: Math.random() },
    { year: '2015', value: Math.random() },
    { year: '2021', value: Math.random() }
  ];
  morris1.setData(NewData);

  var data2 = [
    {x: '2010 Q4', y: Math.random(), z: Math.random()},
    {x: '2011 Q1', y: Math.random(), z: Math.random()},
    {x: '2011 Q2', y: Math.random(), z: Math.random()},
    {x: '2011 Q3', y: Math.random(), z: Math.random()},
    {x: '2011 Q4', y: Math.random(), z: Math.random()},
    {x: '2012 Q1', y: Math.random(), z: Math.random()}
  ];
morris2.setData(data2);

});
