class Drops{
  constructor(x, y){
    var options = {
      "friction":0.1,
      "restitution":0.5,
      "density":0.001
    }
    this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
  }
  update(){
    if(this.body.position.y > height){
      Matter.Body.setPosition(this.body, {x:random(0, 500), y:random(0, 400)});
    }
  }
  display(){
    var pos = this.body.position;
    push();
    fill(0, 0, 255);
    ellipseMode(CENTER);
    ellipse(pos.x, pos.y, 10);
    pop();
  }
}
