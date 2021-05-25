//Create variables here
var database;
var dog;
var happyDog;
var foodS;
var foodStock;

function preload()
{
	//load images here
dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500,500);
  
  dog = createSprite(250,250);
  dog.addImage(dog);
  
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

}


function draw() {  
  background(46,139,87);




  drawSprites();
  //add styles here
  textSize(50);
  fill("white");
  text("Note =  Press UP_ARROW to feed Drago Milk",250,250);

}

function readStock(data){
  foodS = data.val();
}


function writeStock(x){

   if(x<=0){
     x=0
   }else{
     x=x-1;
   }
   
  database.ref('/').update({
    Food:x
  })
}

