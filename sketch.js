var wall, thickness;
var speed, bullet, weight;
function setup(){
    thickness=random(22,83)
    wall=createSprite(1200,300,thickness,height/2)
    speed=random(223,321)
    weight=random(30,52)
    bullet=createSprite(50,200,50,5)
    bullet.velocityX=speed
}
function draw(){
    
    if(hasCollided(bullet, wall))
   (

    bullet.velocityX=0)
     var damage=0.5 * weight * speed * speed/(thickness *thickness * thickness)

   
   if(damage+20)
   (

       wall=shapecolor(255,0,0)

   )
   if(damage-10)
   (

       wall=shapecolor(0,255,0)

   )


   function hasCollided(bullet, wall)
   {
     bulletRightEdge=bullet.x +bullet.width;
     wallLeftEdge=wall.x;
     if (bulletRightEdge>=wallLeftEdge)
     {
         return true 
     }
      return false
  }
   
}