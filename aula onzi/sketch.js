var weight = [35,38,42,45,43,34,36,41,48,32];
var soma = 0
var media
function setup() {
  createCanvas(400,400);
for (var pesos = 0;pesos < weight.length; pesos++) {
  soma+=weight[pesos]
  
}
media=soma/weight.length
console.log(media)
}

function draw() 
{
  background(30);
}

 

