
var r=10;
var g=50;
var b=110;

function setup(){
  createCanvas(800,400);
}

function draw(){
  background(r,g,b);
  let x1 = map(mouseX, 0, width, 5, 95);
  if(mouseX>=100 && mouseX<=300){
  r=230;
  g=80;
  b=131;
  }
  else if(mouseX==0){
  r=10;
  g=50;
  b=110;
  }
  else if(mouseX>300 && mouseX<=400){
  r=123;
  g=80;
  b=131;
  }
  else if(mouseX>400){
  r=226;
  g=90;
  b=13;
  }
  ellipse(x1, 25, 40, 40);
  drawSprites();
}