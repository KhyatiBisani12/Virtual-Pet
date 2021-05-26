//Create variables here
var database;
var dog;
var dogImg;
var happyDog;
var foodS;
var foodStock;

function preload()
{
	//load images here
dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  database = firebase.database(); 
  createCanvas(500,500);

  
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }


  drawSprites();
  //add styles here
  textSize(50);
  fill("white");
  text("Note =  Press UP_ARROW to feed Drago Milk",250,250);
  text("Food remaining:",+foodS,170,200)

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

