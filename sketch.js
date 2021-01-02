var fRect, mRect;

function setup() {
  createCanvas(800,400);
  fRect = createSprite(400, 200, 50, 80);
  fRect.shapeColor = "green";
  mRect = createSprite(800, 200, 80, 30);
  mRect.shapeColor = "green";
  fRect.velocityX = 5;
  mRect.velocityX = -5;

}

function draw() {
  background(255,255,255);  

  //mRect.x = World.mouseX;
  //mRect.y = World.mouseY;

  /*if((mRect.x - fRect.x < mRect.width/2 + fRect.width/2) && (fRect.x - mRect.x < mRect.width/2 + fRect.width/2)
  && (mRect.y - fRect.y < mRect.height/2 + fRect.height/2) && (fRect.y - mRect.y < mRect.height/2 + fRect.height/2)){

    fRect.shapeColor = "red";
    mRect.shapeColor = "red"; 

  } else {

    fRect.shapeColor = "green";
    mRect.shapeColor = "green";

  }*/
  
  if((mRect.x - fRect.x < mRect.width/2 + fRect.width/2) && (fRect.x - mRect.x < mRect.width/2 + fRect.width/2)){

    fRect.velocityX = fRect.velocityX*(-1);
    mRect.velocityX = mRect.velocityX*(-1);

  }

  if((mRect.y - fRect.y < mRect.height/2 + fRect.height/2) && (fRect.y - mRect.y < mRect.height/2 + fRect.height/2)){

    fRect.velocityY = fRect.velocityY*(-1);
    mRect.velocityY = mRect.velocityY*(-1);

  }

  drawSprites();
}