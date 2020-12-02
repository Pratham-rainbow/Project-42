const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;

var thunder1, thunder2, thunder3, thunder4;

function preload(){
  thunder1 = loadImage("images/thunderbolt/1.png");
  thunder2 = loadImage("images/thunderbolt/2.png");
  thunder3 = loadImage("images/thunderbolt/3.png");
  thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(500, 700);

   engine = Engine.create();
   world = engine.world;

   for(var i = 0; i < maxDrops; i++){
     drops.push(new Drops(random(0, width), random(0, 400)));
   }

   umbrella = new Umbrella(width/2, height-170);

   Engine.run(engine);
}

function draw(){
  background(20);

  for(var d of drops){
    d.display();
    d.update();
  }

  umbrella.display();

  Engine.update(engine);

  spawnThunder();

  drawSprites();
}

function spawnThunder(){
  if(frameCount%90===0){
    var thunder = createSprite(width/2, 10);

    var rand = Math.round(random(1, 4));
    switch(rand){
      case 1:
        thunder.addImage(thunder1);
        break;
      case 2:
        thunder.addImage(thunder2);
        break;
      case 3:
        thunder.addImage(thunder3);
        break;
      case 4:
        thunder.addImage(thunder4);
        break;
    }
    thunder.scale = 0.7;
    thunder.lifetime = 12;
  }
}
