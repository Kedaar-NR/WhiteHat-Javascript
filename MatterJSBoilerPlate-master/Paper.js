class Paper {
    constructor(x, y) {
      var options = {
          "isStatic": false,
          'restitution':0.3,
          'friction':10.5,
          'density':1.2
      }
      this.body = Bodies.ellipse(x, y, 50, 50);
      this.width = 100;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("pink");
      fill(255);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };