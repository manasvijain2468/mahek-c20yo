var ball,car;
var speed,weight
var wall;
 function setup() { 

   createCanvas(1600,400);

speed = random(55,90); 
weight = random(400,1500);

car = createSprite(50, 200, 100, 50); 
car.velocityX = speed; 
car.shapeColor = color(255);

wall = createSprite(1500,200,60,height/2); } 
function draw() { 
  background("pink"); 
  if(wall.x-car.x<car.width/2 + wall.width/2){
 car.velocityX = 0; 
 var deformation = 0.5*width*speed*speed/22500;

 if(deformation>180){ 
  car.shapeColor = color(255,0,0);

  if(deformation<180 && deformation>100){ 
    car.shapeColor = color(230,230,0);
   } 
  
if(deformation<100){
 car.shapeColor = color(0,255,0);
 }

 

  

console.log(deformation) 
}
 }

 drawSprites();
 }