class Box{

constructor(x,y,w,h){

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.visibility = 255;
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:false})
World.add(world,this.body);

}
display(){
if(this.body.speed<3){
var boxpos=this.body.position;

push();
translate(boxpos.x,boxpos.y);

stroke("black");
//strokeWeight(4);
rect(0,0,this.w,this.h);
pop();
}else{
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility -5;
    tint(255,this.Visiblity);
    pop();
}

}


}