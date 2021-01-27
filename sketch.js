const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
// first lane
var box1,box2,box3,box4,box5,box6,box7;
// second lane
var box8,box9,box10,box11,box12;
// third lane
var box13,box14,box15;
// last box
var box16;
//2 tower
var box17,box18,box19,box20,box21;
//2 TOWER LANE 2
var box22,box23,box24;
//2 tower last lane
var box25;

var polygon;

var gameState="onChain";

function preload(){



}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,500,400,10);
    ground2 = new Ground(600,590,1500,10)
    ground3 = new Ground(1000,200,300,10);

    // firt lane
    box1 = new Box(540,480,20,30);
  
    box2 = new Box(560,480,20,30);
    box3 = new Box(580,480,20,30);
    box4 = new Box(600,480,20,30);
    box5 = new Box(620,480,20,30);
    box6 = new Box(640,480,20,30);
    box7 = new Box(660,480,20,30);
    // second lane
    box8 = new Box(560,450,20,30);
    box9 = new Box(580,450,20,30);
    box10 = new Box(600,450,20,30);
    box11 = new Box(620,450,20,30);
    box12 = new Box(640,450,20,30);
    // third lane
    box13 = new Box(580,420,20,30);
    box14 = new Box(600,420,20,30);
    box15 = new Box(620,420,20,30);
    //last box
    box16 = new Box(600,390,20,30);

    //2 tower
    box17 = new Box(955,180,20,30);
    box18 = new Box(978,180,20,30);
    box19 = new Box(1000,180,20,30);
    box20 = new Box(1024,180,20,30);
    box21 = new Box(1045,180,20,30);
    //2 tower lane 2
    box22 = new Box(978,150,20,30);
    box23 = new Box(1000,150,20,30);
    box24 = new Box(1024,150,20,30);
    //2 tower last lane
    box25 = new Box(1000,120,20,30);
    
    polygon = new Polygon(280,350,20,20);

    chain = new Chain(polygon.body,{x:280,y:350})

}

function draw(){
background(56,44,44);
Engine.update(engine);

ground1.display();
ground2.display();
ground3.display();
//lane one
fill(135,206,234);
box1.display();
fill(135,206,234);
box2.display();
fill(135,206,234);
box3.display();
fill(135,206,234);
box4.display();
fill(135,206,234);
box5.display();
fill(135,206,234);
box6.display();
fill(135,206,234);
box7.display();
//lane second
fill(255,192,203);
box8.display();
fill(255,192,203);
box9.display();
fill(255,192,203);
box10.display();
fill(255,192,203);
box11.display();
fill(255,192,203);
box12.display();
//lane third
fill(63,224,208);
box13.display();
fill(63,224,208);
box14.display();
fill(63,224,208);
box15.display();
//last box
fill(128,128,128);
box16.display();


//2 tower
fill(135,206,234);
box17.display();
fill(135,206,234);
box18.display();
fill(135,206,234);
box19.display();
fill(135,206,234);
box20.display();
fill(135,206,234);
box21.display();

//2 tower lane2
fill(63,224,208);
box22.display();
fill(63,224,208);
box23.display();
fill(63,224,208);
box24.display();
//2 tower last lane
fill(255,192,203);
box25.display();
polygon.display();
chain.display();


}

function mouseDragged(){

 
        Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
        


}
function mouseReleased(){
chain.fly();

gameSate="launched";
	
	}
function keyPressed(){

    if(keyCode === 32){
    chain.attach(polygon.body);

    }
}

