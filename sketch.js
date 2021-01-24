var canvas;
var box;
var surface1,surface2,surface3,surface4;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 //create box sprite and give velocity
    box = createSprite(random(20,750),100,30,30);
    box.velocityX = 5;
    box.velocityY = 5;
    box.shapeColor = "white";

    //create 4 different surfaces
surface1 = createSprite(100,590,150,20);
surface1.shapeColor = "blue";

surface2 = createSprite(300,590,150,20);
surface2.shapeColor = "orange";
   
surface3 = createSprite(500,590,150,20);
surface3.shapeColor = "maroon";

surface4 = createSprite(700,590,150,20);
surface4.shapeColor = "green";
}

function draw() {
    background(rgb(169,169,169));
   
    edges = createEdgeSprites();
    box.bounceOff(edges);

if(surface1.isTouching(box)&& box.bounceOff(surface1)){
    box.shapeColor = "blue";
    music.play();

}

if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    box.shapeColor = "orange";
    music.play();
}

if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    box.shapeColor = "maroon";
    music.play();
}

if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    box.shapeColor = "green";
    music.play();
}




 

    drawSprites();
}
