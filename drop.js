class Drop{
    constructor(x,y){
var opt = {
    fiction:0.001,
    restitution:0.1
}
this.rain=Bodies.circle(x,y,5,opt)
World.add(world,this.rain)
    }
update(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,50)})
    }
}
display(){
    fill("blue")
    ellipseMode(CENTER)
    ellipse(this.rain.position.x,this.rain.position.y,5,5) 
}
}