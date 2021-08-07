class Projectile{
    constructor(x, y) {
        var options = {
          'restitution':0.8,
            'friction':10.0,
            'density':10.0
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = 100;
        this.height = 100;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
       // var angle = this.body.angle;
        push();
     //   translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.x, this.width, this.height);
        pop();
      }
}