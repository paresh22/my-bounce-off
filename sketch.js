var movingRect,fixedRect;
var edges;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200,400,60,60);
  movingRect.velocityX=3;
  movingRect.velocityY=-3;
  fixedRect.velocityX=6;
  fixedRect.velocityY=6;
  edges=createEdgeSprites();

  
}

function draw() {
  background(234,234,234);  
  //movingRect.y=mouseY;
  //movingRect.x=mouseX;

//is touching code
if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}
else{
  fixedRect.shapeColor="grey";
  movingRect.shapeColor="grey";
}

//bounceoff
if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
  && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1);
    fixedRect.velocityX=fixedRect.velocityX*(-1);
  }

  if(fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.velocityY=movingRect.velocityY*(-1);
      fixedRect.velocityY=fixedRect.velocityY*(-1);
    }

   movingRect.bounceOff(edges[0]);
   movingRect.bounceOff(edges[1]);
   movingRect.bounceOff(edges[2]);
   movingRect.bounceOff(edges[3]);
   fixedRect.bounceOff(edges[0]);
   fixedRect.bounceOff(edges[1]);
   fixedRect.bounceOff(edges[2]);
   fixedRect.bounceOff(edges[3]);
  drawSprites();
}