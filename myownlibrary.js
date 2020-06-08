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
