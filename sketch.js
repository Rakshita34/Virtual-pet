var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here

  

}

function draw() {
  background(46,139,87);
  

  //write code to read fedtime value from the database 
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
 
  //write code to display text lastFed time here

 
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food Remaining: "+foodS,170,200);

  textSize(13);
  text("Press UpArrow Key To Feed Milk", 130,10,300,20);
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  
}


function writeStock(x){
  if(x<=0){
    x = 0;


  }
  else{
    x = x-1;
  
  }
  database.ref('/').update({
    Food:x
  })

  
}