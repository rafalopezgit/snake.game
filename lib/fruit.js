function Fruit(ctx, fruitX, fruitY){
this.ctx = ctx;
this.x = fruitX;
this.y = fruitY;
this.radius = 15;
this.color = this.makeRandomColor();
}

Fruit.prototype.draw = function() {
  this.ctx.strokeRect(0,0,canvas.width,canvas.height);
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  this.ctx.closePath();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
};


Fruit.prototype.makeRandomColor = function(){
  var c = "";
  while (c.length < 6) {
    c += (Math.random()).toString(16).substr(-6).substr(-1)
  }
  // var colorNode = "#"+c;
  return "#"+c;
}
