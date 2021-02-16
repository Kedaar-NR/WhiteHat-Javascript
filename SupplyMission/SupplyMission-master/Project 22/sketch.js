var helicopterIMG, helicopterSprite, packageSprite,packageIMG, baseSprite, rightSprite, leftSPrite;
var packageBody,ground, base, left, right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	baseSprite = createSprite(370, height-60, 200, 20);
	baseSprite.shapeColor= "red";

	leftSprite = createSprite(480, height-80, 20, 100);
	leftSprite.shapeColor= "red";

	rightSprite = createSprite(280, height-80, 20, 100);
	rightSprite.shapeColor= "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	right = Bodies.rectangle(280, height-80, 20, 100 , {isStatic:true, restitution:0.0} );
	World.add(world, right);
	 
	left = Bodies.rectangle(480, height-80, 20, 100 , {isStatic:true, restitution:0.0} );
	World.add(world, left);
	 
	base = Bodies.rectangle(370, height-60, 200 , {isStatic:true, restitution:0.0} );
	World.add(world, base); 
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Body.setStatic(packageBody,false);
    
  }
}



