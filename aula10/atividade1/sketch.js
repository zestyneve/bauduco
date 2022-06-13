var notas = [6,3,10,9,4,7];
var media,soma =0;
function setup() 
{
  createCanvas(400,400);
  soma=notas[0]+notas[1]+notas[2]+notas[3]+notas[4]+notas[5];
  media=soma/notas.length
  console.log("media"+media)
}

function draw() 
{
background(51);

}

