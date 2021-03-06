const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops = [];
var maxdrops = 100;
var umbrella;
var thunder1, thunder2, thunder3, thunder4;
var walking_frame;
var thunderCreatedFrame;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){

    createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    if (frameCount % 80 === 0) {
        for (i = 0;  i < maxdrops; i++) {
            drops.push(new Drops (random(0, 400), random(0, 650)));
        }
    }

    umbrella = new Umbrella(200, 500);
  
}

function draw(){
 
    background(0);
    Engine.update(engine);
    
    for ( i = 0;  i < maxdrops; i++) {
        drops[i].display();
        drops[i].updateY();
    }

    //var thunderCreatedFrame=frameCount;
    var rand = Math.round(random(1,4));

    if(frameCount % 80 === 0) {
        thunderCreatedFrame = frameCount;

        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand) {
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
        }
        thunder.scale = random(0.3,0.6);
    }
        //var thunderCreatedFrame=frameCount;
        if(thunderCreatedFrame + 50 === frameCount && thunder){ 
            thunder.destroy(); 
        }
        
    umbrella.display();
    drawSprites();
}   
