let ocean;
let submarine;
let hookImage;
let hook;
let subX = 950;
let subY = 150;
let treasure;
let treasureOB;

function preload() {
  ocean = loadImage('assets/oceanjpg.jpg');
  submarine = loadImage('assets/submarine.png');
  hookImage = loadImage('assets/hook.png');
  treasure = loadImage('assets/Treasure.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  hook = new Hook(950, 250);
  treasureOB = new Treasure(100, 100)
}

function draw() {
  background(255);
  image(ocean, 0, 0, windowWidth, windowHeight);
  image(submarine, 800, -25, 300, 250);
  hook.move();
  hook.display();
  treasureOB.display();
}

class Treasure {
  constructor(x, y) {
    this.position = createVector(x, y);
    
  }
  display() {
    image(treasure, 600, 700, this.position.x, this.position.y);
    image(treasure, 100, 500, this.position.x, this.position.y);
    image(treasure, 200, 300, this.position.x, this.position.y);
    
  }
}
function keyTyped() {
  if (key === ' ') {
    hook.dive();
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
  dive(){
    this.state = 1;
  }

  move() {
    if (this.state === 0) {

      this.angle = radians(map(sin(frameCount * 0.02), -1, 1, 0, 180));
      this.position.x = subX + cos(this.angle) * 100;
      this.position.y = subY + sin(this.angle) * 100;
    } else if (this.state === 1) {
      this.position.y += 4;
      if (this.position.y > windowHeight) {
        this.state = 0;
      }
    }
  }
  


  display() {
    line(subX, subY, this.position.x, this.position.y);
    imageMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle + radians(270));
    image(hookImage, 0, 0, this.size, this.size);
    pop()
    imageMode(CORNER);
   
  }
}