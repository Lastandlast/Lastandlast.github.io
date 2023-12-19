// Project Title  
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let ocean;
let submarine;
let hookImage;
let hook;
function preload(){
  ocean = loadImage('assets/oceanjpg.jpg');
  submarine = loadImage('assets/submarine.png');
  hookImage = loadImage('assets/hook.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  hook = new Hook(100, 100);
}

function draw() {
  background(255);
  image(ocean, 0, 0,windowWidth, windowHeight);
  image(submarine, 800, -25, 300, 250);
  hook.display();
}


class Hook{
  constructor (x, y){
    this.position = createVector(x, y);
    this.target = createVector(x, y);
    this.vel = createVector(0, 0);
    this.state = 0;
    
  }
  display (){
    image(hookImage,this.position.x,this.position.y);
    
  }

  
}

