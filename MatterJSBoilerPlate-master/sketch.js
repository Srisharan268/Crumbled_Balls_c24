
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,ground,body1,body2,body3;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,00,20);
    ground = new Ground(600,390,1200,20);

	body1 = new Box(900,370,200,20);
	body2 = new Box(800,330,20,100);
	body3 = new Box(1000,330,20,100);

	Engine.run(engine);
  
}


function draw() {
  background("lightBlue");
  console.log(mouseX,mouseY)
  
  paperBall.display();
  ground.display();

  body1.display();
  body2.display();
  body3.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperBall.body,paperBall.body.positon,{x:67,y:-90})
}
}

