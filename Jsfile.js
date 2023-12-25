
function animateBall(ball) {
  // Cập nhật vị trí của quả bóng
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Kiểm tra xem quả bóng có va chạm với bất kỳ cạnh nào của màn hình không
  if (ball.x < 0 || ball.x > window.innerWidth) {
    ball.vx *= -1;
  }
  if (ball.y < 0 || ball.y > window.innerHeight) {
    ball.vy *= -1;
  }

  // Vẽ quả bóng
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fill();
}

// Tạo quả bóng
var ball = {
  x: 0,
  y: 0,
  vx: 2,
  vy: 2,
  radius: 10,
  color: "red"
};

// Khởi tạo vòng lặp lặp lại
var animate = function() {
  // Cập nhật vị trí của quả bóng
  animateBall(ball);

  // Vẽ lại màn hình
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  // Tiếp tục vòng lặp
  requestAnimationFrame(animate);
};

// Khởi động vòng lặp
animate();
