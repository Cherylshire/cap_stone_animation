var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


function Circle (x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;

  this.draw = function() {
    console.log("draw", this.x);
     c.beginPath();
     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
     c.strokeStyle = 'navy';
     c.stroke();  
   };
}




function animate() {
  // requestAnimationFrame(animate); // find out what this does???


  var circleArray = [];
  var forward = true;

  for(var i = 0; i < 60; i++) {
    if (i * 50 > canvas.width ) {
      forward = false;
    }

    if (forward) {
      var x = i * 50;
    } else {
      var x = canvas.width - ((i * 50) - canvas.width)
    }
    var y = i * 10;
    var radius = 60;
    circleArray.push(new Circle(x, y, radius));
  } 

  var count = 0;

  circleArray.forEach(function(circle) {
    setTimeout(function() { // setInterval, setTimeout - research
      c.clearRect(0, 0, innerWidth, innerHeight); // clears pages
      circle.draw(); // draws circle
    }, 500 * count)
    count += 1;
  });

}

animate();

// serializer: store an array in a database.
// basic animation library in JavaScript library.
