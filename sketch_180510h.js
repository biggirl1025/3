var img;

function preload(){
  img=loadImage('mirror.jpg');
}


function setup(){
  createCanvas(1698,605);
  background(245,201,114);
  image(img,849,0);
}

function draw(){
  noStroke();
  fill(255);
  ellipse(425,300,805,550);
  
  fill(mouseX/2,mouseY/2,160);
  ellipse(425,300,500,500);
  
  fill(0);
  ellipse(425,300,150,150);
  
  fill(255,150);
  ellipse(350,250,80,80);
  ellipse(390,250,60,60);
  ellipse(420,250,45,45);
}
  
