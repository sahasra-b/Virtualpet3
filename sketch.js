//Create variables here
var dog, happyDog, database, foodS, foodStock;
var buttonAddFood, buttonFeedPet;
var fedTime, lastFed;
var foodObj;
var changeGameState, readGameState;



function preload()
{
	//load images here
image = loadImage("images/dogImg.png");
image = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);

  feed=createButton("Feed the dog");
  feed.position(700, 95)

  dog = new Dog (250, 250);

  feed=createButton("Feed The Dog");
  feed.position(100, 100);
  feed.mousePressed(feedDog);

  
  addFood=createButton("Add Food");
  addFood.position(80, 95);
  addFood,mousePressed(addFoods);

  readState=database.ref('gameState');
  readState.on("value", function(data){
    gameState=data.val();
  });


function draw() {  

  background(46, 139, 87);


    if (keyPressed=UP_ARROW){

      foodStock=-1;

      this.dog = loadImage ('images/dogImg1');
     //change dog sprite to happyDog.
    }

    if(keyWentDown(UP_ARROW))
    { writeStock(foodS); dog.addImage(dogImg1); }

  drawSprites();
  //add styles here

}

function writeStock(x)
{ if(x<=0){ x=0; }
else
{ x=x-1; } 
database.ref('/').update({ Food:x }) }


}
