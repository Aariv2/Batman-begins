class Umbrella{
    constructor(x,y){
        var opt ={isStatic:true}
        this.image=loadImage("images/Walking Frame/walking_1.png")
        this.umbrella =Bodies.circle(x,y,50,opt)
        World.add(world,this.umbrella)
         
    }
    display(){
        var pos= this.umbrella.position
        imageMode(CENTER)
image(this.image,pos.x,pos.y+70,300,300)
    }
}