var bullet,wall,damage;
var speed,weight,thickness;





function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 20, 10);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="grey"
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
}

function draw() {
  background(255,255,255);  
  
  hascollided();
  drawSprites();
}

function hascollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){

  return true

}
return false;



}
























