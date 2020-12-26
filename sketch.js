function setup() {
  createCanvas(800,400);
  fixed= createSprite(400, 200, 50, 50);
  fixed.shapeColor= "blue";
  fixed.debug= true;

  moving= createSprite(400,200,50,50)
  moving.shapeColor= "blue"
  moving.debug= true;

}

function draw() {
  background(255,255,255);  
  moving.x=World.mouseX;
  moving.y= World.mouseY;

if(moving.x-fixed.x<fixed.width/2+moving.width/2
  &&fixed.x-moving.x<fixed.width/2+moving.width/2
  &&moving.y-fixed.y<fixed.height/2+moving.height/2
  &&fixed.y-moving.y<fixed.height/2+moving.height/2) { 

  moving.shapeColor= "purple"
  fixed.shapeColor= "purple"
}
else{
  moving.shapeColor= "blue"
  fixed.shapeColor= "blue"
}
  drawSprites();
}