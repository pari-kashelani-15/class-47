const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg, boardImg;
var ground;
var arrow;
var bow;
var balloon1, balloon2, balloon3, balloon4, balloon5, balloon6, balloon7, balloon8, balloon9, balloon10, balloon11, 
balloon12, balloon13, balloon114, balloon15, balloon16, balloon17, balloon18, balloon19, balloon20, balloon21;

function preload(){
  backgroundImg = loadImage("bg 3.jpg");

  boardImg = loadImage("wooden board 2.png");
}

function setup() {
  var canvas = createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(displayWidth/2,height-30,width,20);

  arrow = new Arrow(100, 20);

  bow = new Bow(arrow.body,{x:1300, y:400});

  balloon1 = new Balloon20(200,320,200,400);
  balloon2 = new Balloon20(200,440,200,400);
  balloon3 = new Balloon20(200,560,200,400);
  balloon4 = new Balloon20(200,680,200,400);
  balloon5 = new Balloon20(440,320,50,100);
  balloon6 = new Balloon20(440,440,50,100);
  balloon7 = new Balloon20(440,560,50,100);
  balloon8 = new Balloon20(440,680,50,100);
  balloon9 = new Balloon20(275,700,80,50);
  balloon10 = new Balloon20(365,700,80,50);
  balloon11 = new Balloon20(275,300,80,50);
  balloon12 = new Balloon20(365,300,80,50);
  balloon13 = new Balloon50(260,380,50,100);
  balloon14 = new Balloon50(255,500,40,100);
  balloon15 = new Balloon50(260,620,50,100);
  balloon16 = new Balloon50(380,380,50,100);
  balloon17 = new Balloon50(385,500,40,100);
  balloon18 = new Balloon50(380,620,50,100);
  balloon19 = new Balloon50(320,385,50,80);
  balloon20 = new Balloon50(320,615,50,80);
  balloon21 = new Balloon100(320,500,70,120);
}

function draw() {
  background(backgroundImg); 
  
  image(boardImg, 70, 170);

  Engine.update(engine)

  ground.display();

  arrow.display();
  
  bow.display();

  balloon1.display();
  balloon2.display();
  balloon3.display();
  balloon4.display();
  balloon5.display();
  balloon6.display();
  balloon7.display();
  balloon8.display();
  balloon9.display();
  balloon10.display();
  balloon11.display();
  balloon12.display();
  balloon13.display();
  balloon14.display();
  balloon15.display();
  balloon16.display();
  balloon17.display();
  balloon18.display();
  balloon19.display();
  balloon20.display();
  balloon21.display();



  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  bow.fly();
}