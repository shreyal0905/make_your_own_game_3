class Assain{
  constructor(x, y, r) {
    var options = {
        isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.4
    }
    this.r = r;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x, this.y, this.r, options);
    
    
    
    World.add(world, this.body);
  }
  display(){
    
    rectMode(CENTER);
    
    rect(this.body.position.x, this.body.position.y, this.r);
    
  }
};