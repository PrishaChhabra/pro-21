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
  
  if(hascollided(bullet,wall))
  {
  bullet.velocityX=0
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor="red"
  }
  if(damage<10){
  
  wall.shapeColor="green"
  }
}
  drawSprites();
  }
























