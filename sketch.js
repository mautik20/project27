const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  roof = new Roof(650, 100, 350, 20);
  ball1 = new Ball(220, 200, 80, 80);
  rope1 = new Rope(ball1.body, { x: 500, y: 100 });
  ball2 = new Ball(280, 200, 80, 80);
  rope2 = new Rope(ball2.body, { x: 580, y: 100 });
  ball3 = new Ball(360, 200, 80, 80);
  rope3 = new Rope(ball3.body, { x: 660, y: 100 });
  ball4 = new Ball(420, 200, 80, 80);
  rope4 = new Rope(ball4.body, { x: 720, y: 100 });
  ball5 = new Ball(500, 200, 80, 80);
  rope5 = new Rope(ball5.body, { x: 800, y: 100 });
}

function draw() {
  background("grey");
  Engine.update(engine);
  roof.display();
  rope1.display();
  ball1.display(); 
  rope2.display();
  ball2.display();
  rope3.display();
  ball3.display();
  rope4.display();
  ball4.display();
  rope5.display();
  ball5.display();


}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


