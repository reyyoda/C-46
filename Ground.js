class Ground { 
 constructor(x,y,width,height){
   var options = { 
     isStatic: true,
    friction: 0.8
   }
   this.width = width
   this.height = height
   this.body = Bodies.rectangle(x,y,width,height,options);
   World.add(myWorld,this.body);
   this.image = loadImage("grass image.jpg");
 }
  
  display(){
    var pos = this.body.position;
    image(this.image,pos.x,pos.y,this.width,this.height);
  }
  
}