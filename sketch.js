
function preload(){
  runner1=loadAnimation("Runner-1.png","Runner-2.png");
  path1=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  
  path=createSprite(150,400);
  path.addImage(path1);
  path.scale=1.2;

  runner=createSprite(155,300);
  runner.addAnimation("movingRunner",runner1);
  runner.scale=0.07
  
  
}

function draw() {
  background("white");
  drawSprites();

  path.velocityY=4
  if(path.y>400){
    path.y=height/5.5
  }
}
