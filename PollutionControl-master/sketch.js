//Make the game objects (PC,NPC)
//Give behavior to the PCs and NPCs(Behavior)
//Images
//Game States(Scoring/End/Play)
//Collision Scenarios
//Defining End State(Rank,When to End)

//Lifetime and spawning new bombs per 9 scores

var score = 0;
var person;
var garbage1, garbage2, garbage3, garbage4, garbage5, garbage6, medicine1, medicine2;
var pesonIMG;
var garbage1Img, garbage2Img, medicine, bomb, bIMG;
var engine, world;
var edges;
var gameState;

function preload(){
  personIMG = loadImage("Trash.png");
  garbage1Img = loadImage("Banana.png");
  garbage2Img = loadImage("Bottle.png");
  medicine = loadImage("Medicine.png");
  bomb = loadImage("Bomb.png");
  bIMG = loadImage("Park.jpg");
}

function setup() {
  createCanvas(displayWidth-630,displayHeight-450);

  edges = createEdgeSprites();

  person = createSprite(500, 100, 60, 60); 
  person.addImage("player", personIMG);
  person.scale = 0.06;

  garbage1 = createSprite(800, 600, 60, 60);
  garbage1.velocityX = random(-3,8);
  garbage1.velocityY = random(-3, 8);
  garbage1.addImage("garbage1", garbage1Img);
  garbage1.scale = 0.05;
  
  garbage2 = createSprite(100, 900, 60, 60);
  garbage2.velocityX = random(-3,8);
  garbage2.velocityY = random(-3, 8);
  garbage2.addImage("garbage2", garbage2Img);
  garbage2.scale = 0.05;
  
  garbage3 = createSprite(500, 300, 80, 90);
  garbage3.velocityX = random(-3,8);
  garbage3.velocityY = random(-3, 8);
  garbage3.addImage("garbage3", garbage2Img);
  garbage3.scale = 0.05;
  
  garbage4 = createSprite(400, 600, 60, 60);
  garbage4.velocityX = random(-3,8);
  garbage4.velocityY = random(-3, 8);
  garbage4.addImage("garbage4", garbage1Img);
  garbage4.scale = 0.05;
  
  garbage5 = createSprite(100, 200, 80, 90);
  garbage5.velocityX = random(-3,8);
  garbage5.velocityY = random(-3, 8);
  garbage5.addImage("garbage5", garbage2Img);
  garbage5.scale = 0.05;
  
  garbage6 = createSprite(100, 600, 60, 60);
  garbage6.velocityX = random(-3,8);
  garbage6.velocityY = random(-3, 8);
  garbage6.addImage("garbage6", garbage1Img);
  garbage6.scale = 0.05;

  medicine1 = createSprite(100, 600, 60, 60);
  medicine1.velocityX = random(-3,8);
  medicine1.velocityY = random(-3, 8);
  medicine1.addImage("medicine1", medicine);
  medicine1.scale = 0.056;

  medicine2 = createSprite(100, 400, 60, 60);
  medicine2.velocityX = random(-3,8);
  medicine2.velocityY = random(-3, 8);
  medicine2.addImage("medicine2", medicine);
  medicine2.scale = 0.067;

  bomb1 = createSprite(100,400, 60, 60);
  bomb1.velocityX = random(-3, 8);
  bomb1.velocityY = random(-3, 8);
  bomb1.addImage("bomb1", bomb);
  bomb1.scale = 0.084;

  bomb2 = createSprite(100, 600, 60, 60);
  bomb2.velocityX = random(-6, -1);
  bomb2.velocityY = random(1, 8);
  bomb2.addImage("bomb2", bomb);
  bomb2.scale = 0.09;
  
}

function draw() {
  background(bIMG);
  fill("red");
  textSize(17);
  text("Score: "+score, 180, 100);

  garbage1.bounceOff(edges);
  garbage2.bounceOff(edges);
  garbage3.bounceOff(edges);
  garbage4.bounceOff(edges);
  garbage5.bounceOff(edges);
  garbage6.bounceOff(edges);
  medicine1.bounceOff(edges);
  medicine2.bounceOff(edges);
  bomb1.bounceOff(edges);
  bomb2.bounceOff(edges);
  
  if(keyDown("up")){
    person.y-=3;
  }

  if(keyDown("down")){
    person.y+=3;
  }

  if(keyDown("left")){
    person.x-=3;
  }

  if(keyDown("right")){
    person.x+=3;
  }

  checkTouch(garbage1);
  checkTouch(garbage2);
  checkTouch(garbage3);
  checkTouch(garbage4);
  checkTouch(garbage5);
  checkTouch(garbage6);

  medicineTouch();

  bombTouch();
  
  drawSprites();
}

function checkTouch(object1) {
  if (object1.isTouching(person)) {
    score++;
    object1.destroy();
  }
}

function medicineTouch() {
  if (medicine1.isTouching(person)) {
    score+=2;
    medicine1.destroy();
  } else if (medicine2.isTouching(person)) {
    score += 2;
    medicine2.destroy();
  }
}

function bombTouch() {
  if (bomb1.isTouching(person) || bomb2.isTouching(person)) {
    person.visible = false;
    garbage1.visible = false;
    garbage2.visible = false;
    garbage3.visible = false;
    garbage4.visible = false;
    garbage5.visible = false;
    garbage6.visible = false;
    medicine1.visible = false;
    medicine2.visible = false;
    bomb1.visible = false;
    bomb2.visible = false;
    score = 0;

    zeroVelocity(garbage1);
    zeroVelocity(garbage2);
    zeroVelocity(garbage3);
    zeroVelocity(garbage4);
    zeroVelocity(garbage5);
    zeroVelocity(garbage6);

    zeroVelocity(medicine1);
    zeroVelocity(medicine2);

    zeroVelocity(bomb1);
    zeroVelocity(bomb2);

    person.x = 50;
    person.y = 50;

    text("GAME OVER: Press 'space' to restart", 500, 330);
  }
  
  if (keyDown("space")) {
    person.visible = true;
    garbage1.visible = true;
    garbage2.visible = true;
    garbage3.visible = true;
    garbage4.visible = true;
    garbage5.visible = true;
    garbage6.visible = true;
    medicine1.visible = true;
    medicine2.visible = true;
    bomb1.visible = true;
    bomb2.visible = true;

    giveVelocity(garbage1);
    giveVelocity(garbage2);
    giveVelocity(garbage3);
    giveVelocity(garbage4);
    giveVelocity(garbage5);
    giveVelocity(garbage6);

    giveVelocity(medicine1);
    giveVelocity(medicine2);

    giveVelocity(bomb1);
    giveVelocity(bomb2);
  }
}

function zeroVelocity(object1) {
  object1.velocityX = 0;
  object1.velocityY = 0;
}

function giveVelocity(object1) {
  object1.velocityX = random(-3, 8);
  object1.velocityY = random(-3, 8);
}

function win(){
  if (score === 9) {
    text("YOU WIN!!!");

  }
}