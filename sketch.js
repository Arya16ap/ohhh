var plate,plateImage;
var cake,cakeImage;
var oveno,ovenc,ovenOpen,ovenClosed;
var gameState = "1";
var play;
var isenser;
var cakealarm;
var ubatter;
var sugar;
var maida;
var egg;
var batter


function preload(){
plateImage = loadImage("plate.png");
cakeImage = loadImage("cake.png");
ovenOpen = loadImage("oven open.png");
ovenclosed = loadImage("oven colsed.jpg");
}

function setup() {
  createCanvas(600,600);
  plate = createSprite(450,500,100,100);
  plate.shapeColor = "white";
  plate.addImage(plateImage);
  plate.visible = false;
  

  cake = createSprite(450,490,30,30);
  cake.addImage(cakeImage);
  cake.scale = 0.5;
  cake.visible = false;

  oveno = createSprite(100,100,200,200);
  oveno.addImage(ovenOpen);
  oveno.visible = false;

  ovenc = createSprite(100,100,200,200);
  ovenc.addImage(ovenclosed);
  ovenc.visible = false;

  play = createSprite(300,300,50,30);
  play.shapeColor = "pink";

  sugar = createSprite(200,200,20,20);
  sugar.shapeColor = "white";
  sugar.visible = false;

  maida = createSprite(250,200,20,20);
  maida.shapeColor = "purple";
  maida.visible = false;

  isenser = createSprite(40,95,30,90);
  isenser.visible = false;
  

  cakealarm = createSprite(450,100,50,50);
  cakealarm.visible = false;

  batter = createSprite(450,490,30,30);
  batter.shapeColor = "brown";
  batter.visible = false;

  ubatter = createSprite(450,490,70,60);
  ubatter.shapeColor = "black";
  ubatter.visible = false;

  egg = createSprite(250,250,20,20);
  egg.shapeColor = "yellow";
  egg.visible= false;


  
}

function draw() {
  if(gameState === 1){
    play.visible = true;
  }
  if(mousePressedOver(play)){
    gameState = "2";
    plate.visible = true;
    oveno.visible = true;
    sugar.visible = true;
    maida.visible = true;
    cake.visible = false;
    play.visible = false;
    cakealarm.visible = true;

  }
  if(gameState === "2"){
    sugar.x = World.mouseX;
    sugar.y = World.mouseY;
    if(maida.collide(sugar)){
      sugar.shapeColor = "blue";
      maida.visible = false;
      egg.visible= true;
    }
    if(egg.collide(sugar)){
      egg.visible = false;
      sugar.visible = false;
      ubatter.visible = true;
      
    }
    ubatter.x = World.mouseX;
      ubatter.y = World.mouseY;
      if(mousePressedOver(ubatter)){
        ubatter.visible = false;
        batter.visible = true;
      }
      batter.x = World.mouseX;
      batter.y = World.mouseY;

    if(mousePressedOver(oveno)){
    ovenc.visible = true;
    oveno.visible = false;
    batter.visible = false;
    cakealarm.shapeColor = "red";
    }
    if(mousePressedOver(isenser)){
      cakealarm.shapeColor = "green";
      ovenc.visible = false;
      oveno.visible = true;
      cake.visible = true;
      gameState = "3";
    }
  }
  if(gameState === "3"){
    oveno.visible = false;
    cakealarm.visible = false;
    plate.Y = 220;
    plate.x = 300;
    cake.x = 310;
    cake.y = 310;
    
    if(mousePressedOver(plate)){
      gameState = "1";
    }
  }

   background("blue");
  
  drawSprites();
}
