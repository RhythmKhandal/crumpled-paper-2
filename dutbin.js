class Dustbin{
   
    constructor(x,y,width,height){

        var myOpt={
            isStatic:true,
            restitution:0.8,
            friction:1.3,
            density:2
        }



        this.body=Bodies.rectangle(x,y,width,height,myOpt)
        this.width=width
        this.height=height
        //Matter.Body.setAngle(this.body,angle)
        //this.image=loadImage("dustbingreen.png")

        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
       // var angle=this.body.angle;
        
         push();
         //translate(pos.x,pos.y);
         //rotate(angle);
         stroke("blue");
         strokeWeight(4);

       
         fill("lightblue");
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);
         pop();



    }










}