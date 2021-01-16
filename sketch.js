var fixedRect, movingRect;
var spt1,spt2;
var game1,game2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  spt1=createSprite(200,400,40,50);
  spt1.velocityX=3;
  spt2=createSprite(800,400,40,30);
  spt2.velocityX=-3;

game1=createSprite(300,200,40,30);
game2=createSprite(400,400,20,30);

}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  bounceOff(spt1,spt2);
 if(isTouching(game1,game2)){
   game1.shapeColor="blue";
   game2.shapeColor="blue";
 }else{
  game1.shapeColor="yellow";
  game2.shapeColor="yellow"; 
 }
  game2.x=mouseX
game2.y=mouseY

  drawSprites();
}

