class Dustbin{
	constructor(x,y,width,height){
   var options={
	   isStatic:true
 
   }
 
  this.body=Bodies.rectangle(x,y,width,height,options);
  this.image=loadImage("trashcan.png")
  World.add(world,this.body);
 
	}
	display(){
 
	 var dustbinSprite=this.body.position;
	  push()
	  translate(dustbinSprite.x,dustbinSprite.y);
	  rectMode(CENTER);
	   
	  strokeWeight(3);
	  fill(255,0,255)
	  image(this.image,0,0,100,100);
 
	  pop();
	}
 
 }