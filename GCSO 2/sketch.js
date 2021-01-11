var wall,thickness;
var bullet,speed, weight; 
var damage;

function setup() {
  createCanvas(1600, 400);

	thickness=random(22,83);
	speed=random(223,321);
	weight=random(30,52);
	deformation=0.5*weight*speed*speed/22500;
	damage=0.5*weight*speed*speed/thickness*thickness*thickness;


	bullet=createSprite(0, 200, 30,10);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x <1444)
  {
	//damage=0.5*weight*speed*speed/thickness*thickness*thickness;
   
	if(damage<10)
	{
		bullet.shapeColor=color(0,255,0);
		console.log("green");
	}

	if(damage>10)
	{
		bullet.shapeColor=color(255,0,0);
		console.log("red");
	}


  drawSprites();
  bullet.collide(wall);
  console.log(damage);
}
}
