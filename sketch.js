let sunflower;
let message;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('sunflower');
  sunflower = new Sunflower();
  message = select('#message');
}

function draw() {
  background(255);
  sunflower.update();
  sunflower.display();
  if (sunflower.isBloomed()) {
    message.html('Sorry Cristin');
  }
}

class Sunflower {
  constructor() {
    this.petals = [];
    this.center = { x: width / 2, y: height / 2 };
    this.radius = 0;
    this.numPetals = 64;
    this.angleIncrement = TWO_PI / this.numPetals;
  }

  update() {
    if (this.radius < 200) {
      this.radius += 0.5;
    }
    for (let i = 0; i < this.petals.length; i++) {
      this.petals[i].update();
    }
  }

  display() {
    noStroke();
    fill(255, 204, 0);
    ellipse(this.center.x, this.center.y, this.radius * 2);
    for (let i = 0; i < this.petals.length; i++) {
      this.petals[i].display();
    }
  }

  isBloomed() {
    return this.radius >= 200;
  }
}

function Petal(x, y, angle, length) {
  this.x = x;
  this.y = y;
  this.angle = angle;
  this.length = length;
  this.speed = 0.05;

  this.update = function() {
    this.angle += this.speed;
    this.x = this.center.x + this.length * cos(this.angle);
    this.y = this.center.y + this.length * sin(this.angle);
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    noFill();
    line(this.center.x, this.center.y, this.x, this.y);
  };
}