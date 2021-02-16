class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,this.radius,options);
      this.color=color(random(0, 255), random(0, 255), random(0, 225));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
