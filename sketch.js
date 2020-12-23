const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper,ground;
var rect1,rect2,rect3;


function preload()
{
paper = loadImage("paper.png");	
}

function setup() {
  createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  paper = new Paper(90,299,50); 
  dustbin = new Dustbin(1000,478,200,20);
	ground = new Ground(600,height,1200,20); 

	
}


function draw() {

  Engine.update(engine);
  rectMode(CENTER);	
  background(255);
  
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:12, y:-55});
}
}