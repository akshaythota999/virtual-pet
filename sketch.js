//Create variables here
var dog,happydog,database,foodS,foodstock,realdog;
function preload()
{
  dog.loadImage("images/dogImg.png")
  happydog.loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500,500);
  realdog.addImage(dog)
  database=firebase.database()
  foodstock.database.ref('food')
  foodstock.on("value",readStock)
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    realdog.addImage(happydog)
  }
  text("note:press up arrow to feed dog!")
  textSize(20)
  
  
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=database.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}


