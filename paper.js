class Paper{
    constructor(x,y,radius) {
        var options = {
            restitution:0.3,
            friction:1,
            density:0.5,
            isStatic:false

        }
        this.body = Bodies.circle(x,y, radius, options);
        this.image=loadImage("paper.png");
       
        World.add(world, this.body);
      }
    
    display(){

     var paperSprite=this.body.position;
      push();
      translate(paperSprite.x,paperSprite.y);
      ellipseMode(RADIUS);
      
      strokeWeight(3);
      fill("white")
      image(this.image,0,0,50,50);

      pop();



    }
}