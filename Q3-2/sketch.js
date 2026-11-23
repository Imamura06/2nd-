// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  if (keyIsDown(LEFT_ARROW)) { x -= 5; }
  if (keyIsDown(RIGHT_ARROW)) { x += 5; }
  if (keyIsDown("a") && keyIsDown(LEFT_ARROW)) { x -= 8; }
  if (keyIsDown("a") && keyIsDown(RIGHT_ARROW)) { x += 8; }
  // BLANK[1] キャラクターの左右移動

  // BLANK[2] 重力とジャンプ
  if(keyIsDown(UP_ARROW)&& y>= height*0.75) {vy = -40}
  
  vy += g;
  y +=vy;
  x +=vx;
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);
  y = constrain(y, 0, height * 0.75)
  if(y >=height*0.75){vy=0}
  // 位置を更新
  
  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}