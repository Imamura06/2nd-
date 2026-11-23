// 最終課題を制作しよう

let points =[]

let cx, cy;
let progress = 0;
let animating = false;

function setup(){
  createCanvas (windowWidth, windowHeight);

  for(let i=0; i<4; i++){
    points.push({
      x: 0,
      y: random(height)
    });
  }

  for(let i=0; i<4; i++){
    points.push({
      x: random(width),
      y: 0
    });
  }

  for(let i=0; i<4; i++){
    points.push({
      x: width,
      y: random(height)
    });
  }

  for(let i=0; i<4; i++){
    points.push({
      x: random(width),
      y: height
    });
  }
}


function draw(){
  background(160, 192, 255)
  
  drawpoints();

  progress += 0.02;

  if(animating){

    stroke(255, 100);
    strokeWeight(2);

    for(let i =0; i < points.length; i++){

      let ex = lerp(cx, points[i].x, progress);
      let ey = lerp(cy, points[i].y, progress);

      line(cx, cy, ex, ey);
    }
 }
  if(progress >= 1){
  progress = 1;
  animating = false;
}
}

function mouseClicked (){
  cx=mouseX;
  cy=mouseY;

  progress=0
  animating=true
}

function drawpoints (){
  fill(245,240,232);

  for (let i =0; i < points.length; i++){
    ellipse (points[i].x, points[i].y, 5)
  
  }
}
  
  
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

