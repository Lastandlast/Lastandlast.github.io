// Project Title  
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let img;
function preload(){
  img = loadImage('assets/oceanjpg.jpg')

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  image(img, 0, 0,windowWidth, windowHeight);
}


class game{
  constructor (){
    this.canvas = null;
    this.context = null;
    this.score = 0;
    this.init();
  }
}