let ground;
let lander;
var lander_img;
var bg_img;

var vx=0
var g=0.05
var vy=5
function preload()
{
 lander_img=loadImage("normal.png")
 bg_img=loadImage("bg_sur.png")
}

function setup() {
  createCanvas(1000,700);
  lander=createSprite(400,300,200,300)
  lander.addImage(lander_img)
  lander.scale=0.3
  lander.setCollider("rectangle",0,0,200,200)
  rectMode(CENTER)
  textSize(15)

}

function draw() 
{
  background(51);
  image(bg_img,0,0)

  push()
  fill(255)
text("Vertical Velocity:"+round(vy),800,100)
pop()
  //fall down
  vy+=g
  lander.position.y+=vy

  
  drawSprites();
}


