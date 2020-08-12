var sun,earth,mars;
var earthImg,marsImg;

function preload(){
  earthImg = loadImage("earth.jpg");
  marsImg = loadImage("download.jfif");
}

function setup() {
  createCanvas(800,400);
  sun = createSprite(650, 250, 35, 35);
  sun.shapeColor=('orange');
  earth = createSprite(420,270,5,5);
  earth.addImage(earthImg);
  earth.scale=0.01;
  mars = createSprite(700,340,5,5);
  mars.addImage(marsImg);
  mars.scale=0.1;
  }

function draw() {
  background(255,255,255);  
  sun.debug=true
  if (frameCount%10===0){
    sun.scale=sun.scale+0.05;
  }
  if (sun.isTouching(earth)){
    earth.visible=false;
  }
  if (sun.isTouching(mars)){
    mars.visible= false;
  }
  drawSprites();
}