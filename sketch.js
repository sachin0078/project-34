//Create variables here
var dogimage1;
var dogimage2;
var database;
var food=0
function preload()
{
  dogimage1=loadImage("images/dogImg.png")
  dogimage2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(300,150,50,50);
  dog.addImage(dogimage1);
  dog.scale=0.3;
database=firebase.database();
var foodref=database.ref("food");
foodref.on("value",function(data){
food=data.val()
})
}


function draw() {  
  background("black")
  textSize(25);
  text("food:"+food,400,100)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){ 
    writeStock(food);
     dog.addImage(dogimage2); }
}

function writeStock(food){
  database.ref("/").update({
    "food":food-1
  })
}

