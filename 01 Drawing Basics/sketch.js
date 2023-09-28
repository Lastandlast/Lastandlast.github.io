let ballx,bally,ballSize = 30;
let xSpeed = 5, ySpeed = 5;
function setup(){
   creatCanvas(windowwidth,windowHeight);
}
function draw(){
   background(220);
   moveAndDrawBall();
}

function moveAndDrawBAll(){
    ballx += xSpeed;
    ballY += ySpeed;
    if(ballx<=0 || ballx >=width){
        xspeed = xspeed - 1;
    }
    fill(0);
    circle(ballx, ballY, ballSize);
}