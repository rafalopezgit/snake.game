function Node(ctx, canvas,color){
this.ctx = ctx;
this.canvas = canvas;
this.x = 15;
this.y = 15;
this.radius = 15;
this.color = color;
// this.direction = "right";
}

Node.prototype.draw = function() {
//circulo cabeza vacio
  this.ctx.strokeRect(0,0,canvas.width,canvas.height);
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
};
