var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.beginPath();
c.strokeStyle = "green";
c.moveTo(450, 300);
c.lineTo(600, 100);
c.lineTo(800, 50);
c.lineTo(820, 100);
c.lineTo(890, 20);

c.stroke();


// circles
for(var i = 0; i < 40; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  {c.arc(x, y, 30, 0, Math.PI * 2, false);
  c.strokeStyle = 'purple';
  c.stroke();}}

for(var i = 0; i < 30; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  {c.arc(x, y, 40, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();}}  

for(var i = 0; i < 20; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  {c.arc(x, y, 70, 0, Math.PI * 2, false);
  c.strokeStyle = 'red';
  c.stroke();}} 


var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = 60;