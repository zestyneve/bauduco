var cubo
function setup() {
  createCanvas(400,400);
  cubo=createSprite(246,264,75,75)
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyIsDown(RIGHT_ARROW)) {
   cubo.x+=1.9
  }
  if (keyIsDown(LEFT_ARROW)) {
    cubo.x-=1.9
   }

}




