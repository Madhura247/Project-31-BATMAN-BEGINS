class Drops {

  constructor(x, y) {
      
      var options = {
        friction: 0.001,
        restitution: 0.1,
        isStatic: false
      }

      this.body = Bodies.circle(x, y, 5, options);
      World.add(world, this.body);
      //console.log(this.body);
    }

  updateY () {
    if (this.body.position.y > height) {
        Matter.Body.setPosition(this.body, {x : random(0, 400), y : random(0, 650)});
    }
  }

  display() {
    fill("blue");
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, 5, 5);
  }

}