const r = 200;
let total = 0;
let in_circle = 0
let display;

function setup() {
  createCanvas(r * 2, r * 2);
  background(0);
  stroke(255);
  strokeWeight(2);
  translate(r, r);
  noFill();
  ellipse(0, 0, r * 2, r * 2);
  display = createP();
}

function draw() {
  for (var i = 0; i < 500; i++) {
    x = random(0, r * 2);
    y = random(0, r * 2);
    if (distance(x, y) <= r * r) {
      stroke(100, 255, 20);
      in_circle++;
    } else {
      stroke(255, 20, 100);
    }
    total++;
    point(x, y);
  }
  pi_estimate();
}

function distance(x, y) {
  xr = x - r;
  yr = y - r;
  return xr * xr + yr * yr;
}

function pi_estimate() {
  let pi = 4 * (in_circle / total);
  display.html(pi);
}