const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// destination-atop
ctx.globalCompositeOperation = 'xor';

ctx.fillStyle = 'navy';
ctx.fillRect(0, 0, 50, 50);

ctx.fillStyle = 'purple';
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = 'teal';
ctx.fillRect(20, 20, 50, 50);

ctx.fillStyle = 'blue';
ctx.fillRect(30, 30, 50, 50);

ctx.fillStyle = 'green';
ctx.fillRect(40, 40, 50, 50);

ctx.fillStyle = 'pink';
ctx.fillRect(50, 50, 50, 50);

ctx.fillStyle = 'red';
ctx.fillRect(60, 60, 50, 50);

ctx.fillStyle = 'yellow';
ctx.fillRect(70, 70, 50, 50);

ctx.fillStyle = 'orange';
ctx.fillRect(80, 80, 50, 50);

ctx.fillStyle = 'brown';
ctx.fillRect(90, 90, 50, 50);
// xor
// ctx.globalCompositeOperation = 'xor';

// ctx.fillStyle = 'blue';
// ctx.fillRect(50, 50, 100, 100);

// ctx.fillStyle = 'red';
// ctx.fillRect(50, 50, 100, 100);
