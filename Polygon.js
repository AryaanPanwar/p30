class Polygon{

    constructor(x,y,width,height){
    
    var options  = {
    
    restitution:0,
    friction:1,
    density:1.2
    
    }

    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image = loadImage("polygon.png");
    this.image.scale=1;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height)
    World.add(world,this.body);    
    }
    
    display(){
    
   var polygonpos =  this.body.position;

    push();
    translate(polygonpos.x,polygonpos.y);
    fill("red");
    stroke("black");
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    }