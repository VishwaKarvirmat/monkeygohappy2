
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey = createSprite(60,500,30,30)
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale = 0.2
  ground = createSprite(300,565,600,15)
  ground.velocityX = -3
  ground.x = ground.width/2
  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("black")
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  if (keyDown("space")){
    monkey.velocityY = -10
  }
    
  monkey.velocityY = monkey.velocityY+0.5
  monkey.collide(ground)
  
  spawnBanana();
  spawnObstacle();
  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,420,40,10);
    banana.y = Math.round(random(300,400));
    banana.addImage(bananaImage);
    banana.scale = 0.2;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
     banana.lifetime = 200;
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
  
}

function spawnObstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,540,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
     obstacle.lifetime = 200;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
}


