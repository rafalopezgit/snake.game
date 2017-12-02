function Snake(ctx){
this.ctx = ctx;
this.x = 50;
this.y = 50;
this.vx = 1;
this.vy = 1;
this.radius = 15;
this.color = "#2e7d32";
this.direction = "right";
}

Snake.prototype.draw = function() {
  var direction = this.direction;
  switch (direction) {
    case "right":
      this.x += this.vx;
      // if (this.x >= 1000) {console.log("Game Over")}
      break;
    case "left":
      this.x -= this.vx;
      // if (this.x <= 0) {console.log("Game Over")}
      break;
    case "up":
      this.y -= this.vy;
      // if(this.y <= 0) {console.log("Game Over")}
      break;
    case "down":
      this.y += this.vy;
      // if(this.y >= 500) {console.log("Game Over")}
  };
//circulo cabeza vacio
  this.ctx.strokeRect(0,0,canvas.width,canvas.height);
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
};
