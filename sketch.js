const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var ground,brick1,brick2,brick3;
 var paperSprite;
 var paper;
function preload()
{
	dustbinImg=loadImage("dustbingreen.png")
    ballImg=loadImage("paper.png");

	
}

function setup() {
	
	createCanvas(800, 700);
    //Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,600,800,20)
	
	
	
	
	
	
	dustBin=new Dustbin(740,500,20,20);
	
	
	
	paperSprite= new Paper(40,450,70);
	
	
   Engine.run(engine);
      
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperSprite.display();
  dustBin.display();
  ground.display();
  
  
 
  
  
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	  	Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:130,y:-145});
	  
		}



	                
	}
