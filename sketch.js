var joxon,joxonimg,path,pathimg,bomb,bombimg,power,powerimg,coin,coinimg,energydrink,energydrinkimg
function preload(){
  //pre-load images
  joxonimg.loadAnimation("Runner-1.png","Runner-2.png")
  pathimg.loadImage("path.png")
  bombimg.loadImage("bomb.png")
  powerimg.loadImage("power.png")
  coinimg.loadImage("coin.png")
  energydrinkimg.loadImage("energyDrink.png")

}
function setup(){
  createCanvas(400,400);
  //create sprites here
  joxon=createSprite(200,200)
  joxon.addAnimation(joxonimg)
}

function draw() {
  background(0);

}
