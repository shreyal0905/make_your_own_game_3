const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

function setup() {
  createCanvas(1300, 630);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(500,600,800,10);
  gr1 = new Ground(1100,610,220,10);
  gr2 = new Ground(1205,330,10,550);
  gr3 = new Ground(655,50,1110,10);
  gr4 = new Ground(95,400,10,410);
  //gr5 = new Ground(95,90,10,90);
  gr6 = new Ground(150,1200,100,10);
  gr7 = new Ground(43,192,100,10);
  gr8 = new Ground(200,190,250,10);
  gr9 = new Ground(439,205,10,300);
  gr10 = new Ground(216,452,230,10);
  gr11 = new Ground(330,368,10,180);
  gr12 = new Ground(553,395,10,400);
  gr13 = new Ground(500,488,100,10);
  gr14 = new Ground(880,200,400,10);
  gr15 = new Ground(682,336,10,280);
  gr16 = new Ground(1079,303,10,200);
  gr17 = new Ground(1146,402,120,10);
  gr18 = new Ground(898,480,10,250);
  gr19 = new Ground(735,284,100,10);
  box = new Gun(1600,100,70,70);
  box1 = new Gun(1600,70,70,70);
  box2 = new Gun(1600,100,70,70);
  assain = new Assain(88,143,50);
  
  

 

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display()
  gr1.display();
  gr2.display();
  gr3.display();
  gr4.display();
  //gr5.display();
  gr6.display();
  gr7.display();
  gr8.display();
  gr9.display();
  gr10.display();
  gr11.display();
  gr12.display();
  gr13.display();
  gr14.display();
  gr15.display();
  gr16.display();
  gr17.display();
  gr18.display();
  gr19.display();
  box.display();
  box1.display();
  box2.display();
  assain.display();

  keyPressed();

  console.log("x"+mouseX, "y"+mouseY);
  


}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(assain.body,assain.body.position,{
      x:0,y:-20
    })
  }
  else if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(assain.body,assain.body.position,{
      x:-10,y:0
    })
  }
  else if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(assain.body,assain.body.position,{
      x:10,y:0
    })
  }
  else if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(assain.body,assain.body.position,{
      x:0,y:0
    })
  }

}




