
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;
var image1;

function preload()
{
	image1=loadImage("dustbingreen.png")
	//image2=loadImage("paperIMG.png")
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(100,100)
	dustbin1 = new Dustbin(625,657,140,17)
	dustbin2 = new Dustbin(555,590,17,165)
	dustbin3 = new Dustbin(685,590,17,165)
	ground = new Ground(400,670,800,15)
	
	//Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
	Engine.update(engine)

	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	
	image(image1,538,485,167,180) 
   ground.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-130})
		}


}


