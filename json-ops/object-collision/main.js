// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
  constructor(x, y, velX, velY, color, size) {
    // where the ball starts in the screen - the x and y coordinates
    this.x = x;
    this.y = y;
    // the horizontal and vertical velocities of the ball, these are also coordinates and they will be added to the x and y coordinates
    this.velX = velX;
    this.velY = velY;
    // the color of the ball
    this.color = color;
    // the size of the ball and its the radius
    this.size = size;
  }
  // the method to draw the ball
  draw() {
    // these are some members of the context
    // context is like a paper
    // this will start drawing on the paper
    // this is like a pen
    ctx.beginPath();
    // this will fill the shape with the color
    ctx.fillStyle = this.color;
    // this is a arc method - it will define the shape of the object
    // x and y are the center of the ball
    // this is the radius of the ball and its size
    // the last property says that the arc begins at 0 degrees and it will continue upto 2* 180 degrees
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // finish the drawing from the start point to the end point and fill the object with the color defined in the fill style
    ctx.fill();
  }

  // updating the ball
  update() {}
}

// creating a new ball
const testBall = new Ball(50, 100, 4, 4, "blue", 10);
// drawing the ball in the canvas
testBall.draw();
