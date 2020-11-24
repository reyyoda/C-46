const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var myEngine, myWorld


var bird, birdImg, hunter, hunterImg, bushes, bushesImg, ground, bushes2, bushes3
var bullet, bulletGroup, birdGroup, bulletImg
function preload(){
  birdImg = loadImage("Bird (2).png")
  hunterImg = loadImage("Hunter image.png");
  bushesImg = loadImage("Bushes.png");
  bulletImg = loadImage("bullet-removebg-preview.png")
  
  
  
}

function setup() {
  createCanvas(800, 800);
  myEngine = Engine.create();
  myWorld = myEngine.world

  birdGroup = new Group();
  bulletGroup = new Group();

  hunter = createSprite(590, 370,10,10);
  hunter.addImage(hunterImg);

  bushes = createSprite(170,450,10,10);
  bushes.addImage(bushesImg);
  bushes.scale = 0.5;

  bushes2 = createSprite(350,450,10,10);
  bushes2.addImage(bushesImg);
  bushes2.scale = 0.5;

  bushes3 = createSprite(620,450,10,10);
  bushes3.addImage(bushesImg);
  bushes3.scale = 0.3;



  hunter.scale = 0.5;
}

function draw() {
  background(220);
  text(mouseX+","+mouseY,mouseX,mouseY);

  if(keyWentDown("space")){
   createBullet();
  }

  if(bulletGroup.isTouching(birdGroup)){
    birdGroup.setVelocityXEach(0);
    birdGroup.setVelocityYEach(5);
  }

  createBird();
  drawSprites();
}

  

function createBullet(){
  bullet = createSprite(562, 295, 10,10);
  bullet.addImage(bulletImg);
  bullet.velocityX = random(-1,-5)
  bullet.velocityY = random(-1,-5)
  bullet.scale = 0.05;
  bulletGroup.add(bullet);
  }

  function createBird(){
    if(frameCount%200 === 0){
      bird = createSprite(50,65,10,10);
      bird.addImage(birdImg);
      bird.velocityX = 3;
      bird.scale = 0.3;
      birdGroup.add(bird);
    }
  }