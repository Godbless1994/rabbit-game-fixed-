var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,apple;
var leaf,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  if(keyDown("left")){
    rabbit.velocityX = - 2;
  }

  if(keyDown("right")){
    rabbit.velocityX= + 2;
  }
  
  if(keyDown("up")){
    rabbit.velocityY = -2; 
  }
  
  if(keyDown("down")){
    rabbit.velocityY = + 2;
  }
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var apple = Math.round(random(1,2));
if (World.frameCount % 80 == 0){
  if (apple == 1){
    createApples();
  }
  

else{
  createLeafs();
}


  
  }

  drawSprites();
}

function createApples() {
var apple = createSprite(Math.round(random(207, 150)), 40, 10, 10);
apple.addImage(appleImg);
apple.scale = 0.1;
apple.velocityY = 2;
apple.lifetime = 150;



}

function createLeafs(){
  var leaf = createSprite(Math.round(random(70, 350)), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1;
  leaf.velocityY = 2;
  leaf.lifetime = 150;


}