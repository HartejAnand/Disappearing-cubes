class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.0001
        }
        
        this.Visiblity=255;
        this.image = loadImage("volcano.jpg");
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        //console.log(this.body.speed);
        if(this.body.speed>4){
          World.remove(world,this.body);
          push();
          this.Visiblity-=floor(random(5,10));      
          tint(255,this.Visiblity);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
        else{
          var angle = this.body.angle;
          var pos=this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);

          fill(0,255,0);
          noStroke();
          tint(255,this.Visiblity);
          rect(0, 0, this.width, this.height);
          
          pop();
        }
        
      }
}