class Umbrella{
  constructor(x, y){
    var options = {
      "isStatic":true
    }
    this.body = Bodies.rectangle(x, y, 110, 300, options);
    World.add(world, this.body);
    this.image = loadImage("images/Walking Frame/walking_1.png");
  }
  display(){
    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, 350, 400);
  }
}
