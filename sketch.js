var fixrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200, 200, 50, 50);
}

function draw() {
  background(0); 
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(movingrect.x - fixrect.x <= fixrect.width/2 + movingrect.width/2 &&
    fixrect.x - movingrect.x <= movingrect.width/2 + fixrect.width/2 && 
    movingrect.y - fixrect.y <= fixrect.height/2 + movingrect.height/2 &&
    fixrect.y - movingrect.y <= movingrect.height/2 + fixrect.height/2) {
    movingrect.shapeColor = "green";
    fixrect.shapeColor = "green";  
  }  
  else{
    movingrect.shapeColor = "red";
    fixrect.shapeColor = "red"; 
  }
  drawSprites();
}