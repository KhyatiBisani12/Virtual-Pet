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

  
  dog = createSprite(250,280);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }


  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  text("Note =  Press UP_ARROW to feed Drago Milk",50,30);
  text("Food remaining:"+foodS,150,170)

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

