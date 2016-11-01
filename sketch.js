var bubbles = [];
var sea;
var actualTime;
var loadTime;
var once = 1;
var x, y;



function preload(){
  bubbleImage = loadImage("bubble.png")
  sea = loadImage("sea.jpg")

}


function setup() {
  createCanvas(700,500);
  background(sea);


  var numBubbles = 100;

  for (var i = 0; i < numBubbles; i++) {
    var x = random(-40,width-40);
    var y = random(height);
    var r = i + .5;
    bubbles[i] = new Bubble( x, y, r);
  }
}

function draw() {

  actualTime = millis() - loadTime;
 println(actualTime);


  for (var i = 0; i < bubbles.length; i++)
   {

      bubbles[i].move();
       bubbles[i].display();
}


if(actualTime > 1000 & actualTime < 2000){
   image(bubbleImage);
 }
   }

   function Bubble(tempX, tempY){
  this.x = tempX;
  this.y = tempY ;
  this.speed = 1;

  this.move = function() {
    this.y += random(-this.speed, this.speed);
    this.x += random(-this.speed, this.speed);

 };

  this.update = function() {
     this.angle += 0.05;
     this.yoffset = sin(this.angle) * 50;
   }


  this.display = function() {
    image(bubbleImage, this.x, this.y,60,50);
    x = width / 2;
     y = height;
     y = y - 1;

     if (y < 0) {
         y = height;
       }
  };

}
