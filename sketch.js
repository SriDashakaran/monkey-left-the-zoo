
var monkey , monkeyruning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime = 0;

function preload(){
  
  
  monkeyruning=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation(monkeyruning);
  monkey.scale= 1;
  
  ground = createSprite(200,350,1400,10);
  ground.velocityX= -4;
  ground.width = ground.width/2;
}

 
function draw() {
 background(220);
  stroke("white");
  textSize(20);
  fill("white");
  text("survivalTime: "+survivaltime,230,80);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime =survivaltime + Math.round(getFrameRate()/60);
  text("survivalTime: "+survivaltime,230,80);
  
 if(ground.x<0){
     ground.x=315;
      }
  if(keyDown("space")){
    monkey.velocityY=-10;
    
     
     }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide ( ground);
  spawnbanana();
  drawSprites();
}
 function spawnbanana(){
   if(frameCount%80===0){
  banana = createSprite(200,200,20,20);
  banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX=-2;
   banana.x = Math.round(random(10,320));

 }

}