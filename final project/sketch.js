let ocean;
let submarine;
let hookImage;
let hook;
let subX = 950;
let subY = 150;

function preload() {
  ocean = loadImage('assets/oceanjpg.jpg');
  submarine = loadImage('assets/submarine.png');
  hookImage = loadImage('assets/hook.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  hook = new Hook(950, 250);
}

function draw() {
  background(255);
  image(ocean, 0, 0, windowWidth, windowHeight);
  image(submarine, 800, -25, 300, 250);
  hook.move();
  hook.display();
}
class Treasure{
  constructor(x,y){
    this.positon = createVector(x,y)
    this.target = createVector(x, y);
    this.vel = createVector(0, 0);
    this.state = 0;
    this.size = 50;
    this.angle = 0;
   }
    display(){
      line(TX, TY.this.position.x, this.position.y)
      imageMode(CENTER);
    }
  }
class Hook {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.target = createVector(x, y);
    this.vel = createVector(0, 0);
    this.state = 0;
    this.size = 50;
    this.angle = 0;
  }

  move() {
    
    this.angle = radians(map(sin(frameCount * 0.02), -1, 1, 0, 180));
    this.position.x = subX + cos(this.angle) * 100; 
    this.position.y = subY + sin(this.angle) * 100; 
  }

  display() {
    line(subX, subY, this.position.x, this.position.y);
    imageMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle + radians(270));
    image(hookImage, 0, 0, this.size, this.size);
    
    imageMode(CORNER);
  }
}