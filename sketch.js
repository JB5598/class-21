var fixrect,movingrect; 
var rect1,rect2; 


function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,200, 30,30); 
  rect1 = createSprite(50,50,40,40); 
  rect2 = createSprite(750,50,40,40); 
  rect1.shapeColor = "green";
  rect1.velocityX = 2;  
  rect2.shapeColor = "yellow"; 
  rect2.velocityX = -2 ;
  rect3 = createSprite(250,100,20,20); 
  rect4 = createSprite(100,200,25,25);
  rect5 = createSprite(300,390,31,31);
  rect5.shapeColor = "brown"; 
  rect5.velocityY= -2; 
  rect6 = createSprite(300,10,30,30);
  rect6. velocityY = 2; 
  rect6.shapeColor = "purple";  
   
}

function draw() {
  background(0);
  movingrect.x = World.mouseX; 
  movingrect.y = World.mouseY; 
  if(istouching(fixrect,movingrect)){
    movingrect.shapeColor ="red"; 
    fixrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "blue"; 
    fixrect.shapeColor = "blue"; 
  }
  if(istouching(rect3,movingrect)){
    movingrect.shapeColor ="red"; 
    rect3.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "blue"; 
    rect3.shapeColor = "blue"; 
  }
  if(istouching(rect4,movingrect)){
    movingrect.shapeColor ="red"; 
    rect4.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "blue"; 
    rect4.shapeColor = "blue"; 
  }
  bounceoff(rect1,rect2);
  bounceoff(rect5,rect6); 
  drawSprites();

}
