const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var world,engine;

var ground, base1, base2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29;
var block30,block31,block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,block43;
var projectile,polygon_img;
var sling;

preload = function(){
    polygon_img=loadImage("polygon.png");
};

setup = function(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine=Engine.create();
    world=engine.world;

    ground = new Ground(windowWidth/2,windowHeight,windowWidth*2,10);
    base1 = new Ground(windowWidth/3,windowHeight*3/4,windowWidth/4,10);
    base2 = new Ground(windowWidth*3/4,windowHeight/3,windowWidth/3,10);

    block1 = new Block(windowWidth/3,windowHeight*3/4-20,50,50);
    block2 = new Block(windowWidth/3-50,windowHeight*3/4-20,50,50);
    block3 = new Block(windowWidth/3-100,windowHeight*3/4-20,50,50);
    block4 = new Block(windowWidth/3+50,windowHeight*3/4-20,50,50);
    block5 = new Block(windowWidth/3+100,windowHeight*3/4-20,50,50);
    block6 = new Block(windowWidth/3-150,windowHeight*3/4-20,50,50);
    block7 = new Block(windowWidth/3+150,windowHeight*3/4-20,50,50);

    block8 = new Block(windowWidth/3,windowHeight*3/4-60,50,50);
    block9 = new Block(windowWidth/3-50,windowHeight*3/4-60,50,50);
    block10 = new Block(windowWidth/3-100,windowHeight*3/4-60,50,50);
    block11 = new Block(windowWidth/3+50,windowHeight*3/4-60,50,50);
    block12 = new Block(windowWidth/3+100,windowHeight*3/4-60,50,50);

    block13 = new Block(windowWidth/3,windowHeight*3/4-80,50,50);
    block14 = new Block(windowWidth/3-50,windowHeight*3/4-80,50,50);
    block15 = new Block(windowWidth/3+50,windowHeight*3/4-80,50,50);

    block16 = new Block(windowWidth/3,windowHeight*3/4-100,50,50);

    block17 = new Block(windowWidth*3/4,windowHeight/3-30,50,50);
    block18 = new Block(windowWidth*3/4-50,windowHeight/3-30,50,50);
    block19 = new Block(windowWidth*3/4-100,windowHeight/3-30,50,50);
    block20 = new Block(windowWidth*3/4+50,windowHeight/3-30,50,50);
    block21 = new Block(windowWidth*3/4+100,windowHeight/3-30,50,50);
    block22 = new Block(windowWidth*3/4-150,windowHeight/3-30,50,50);
    block23 = new Block(windowWidth*3/4+150,windowHeight/3-30,50,50);
    block24 = new Block(windowWidth*3/4-200,windowHeight/3-30,50,50);
    block25 = new Block(windowWidth*3/4+200,windowHeight/3-30,50,50);
    
    block26 = new Block(windowWidth*3/4,windowHeight/3-80,50,50);
    block27 = new Block(windowWidth*3/4+50,windowHeight/3-80,50,50);
    block28 = new Block(windowWidth*3/4-50,windowHeight/3-80,50,50);
    block29 = new Block(windowWidth*3/4-100,windowHeight/3-80,50,50);
    block30 = new Block(windowWidth*3/4+100,windowHeight/3-80,50,50);
    block31 = new Block(windowWidth*3/4-150,windowHeight/3-80,50,50);
    block32 = new Block(windowWidth*3/4+150,windowHeight/3-80,50,50);

    block33 = new Block(windowWidth*3/4+100,windowHeight/3-130,50,50);
    block34 = new Block(windowWidth*3/4-50,windowHeight/3-130,50,50);
    block35 = new Block(windowWidth*3/4+50,windowHeight/3-130,50,50);
    block36 = new Block(windowWidth*3/4-100,windowHeight/3-130,50,50);
    block37 = new Block(windowWidth*3/4,windowHeight/3-130,50,50);

    block38 = new Block(windowWidth*3/4,windowHeight/3-180,50,50);
    block39 = new Block(windowWidth*3/4-50,windowHeight/3-180,50,50);
    block40 = new Block(windowWidth*3/4+50,windowHeight/3-180,50,50);

    block41 = new Block(windowWidth*3/4,windowHeight/3-230,50,50);

    projectile = Bodies.circle(50,200,20);
    World.add(world,projectile);
  
    sling = new Slingshot(this.projectile,{x:100,y:200});
   // sling = new Slingshot(this.projectile,{x:windowWidth/10, y:200});

    Engine.run(engine);

};

draw = function(){
    background(0,100,0);
  //  for(var design=0;design<windowWidth;design+=10){
 //       strokeWeight(5);
  //      stroke(0,0,random(220,280));
  //      line(0,design,windowWidth,design);
  //  }

    ground.display();
    base1.display();
    base2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();

    imageMode(CENTER)
  image(polygon_img ,projectile.position.x,projectile.position.y,40,40);
    sling.display();

    fill(0,0,random(155,255));
    stroke(0,0,0);
    strokeWeight(5);
    textSize(25);
    text("Pull projectile back, aim, release",windowWidth*1.75/3,windowHeight*2.75/4);
    
};

mouseDragged=function(){
	Matter.Body.setPosition(this.projectile,{x:mouseX,y:mouseY});
};

function mouseReleased(){
    sling.fly();
}

keyPressed = function(){
    if(keyCode===32){
        sling.attach(projectile.body);
    }
};