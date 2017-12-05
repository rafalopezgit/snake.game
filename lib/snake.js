function Snake(ctx, canvas){
this.ctx = ctx;
this.canvas = canvas;
this.radius = 15;
this.color = "#2e7d32";
this.direction = "right";
this.nodes = [];
this.nodes.push(new Node(this.ctx, this.canvas));
this.vx = 30;
this.vy = 30;
this.x = this.nodes[0].x;
this.y = this.nodes[0].y;
}

Snake.prototype.addNode = function() {
  var node = new Node(this.ctx, this.canvas);
  node.x = this.nodes[this.nodes.length - 1].x - 30;
  node.y = this.nodes[this.nodes.length - 1].y;
  this.nodes.push(node);
};

Snake.prototype.draw = function() {
  for (var i = this.nodes.length - 1; i >= 0; i--){
    if (i > 0) {
      this.nodes[i].x = this.nodes[i - 1].x;
      this.nodes[i].y = this.nodes[i - 1].y;
    }
      this.nodes[i].draw();

  }
  var direction = this.direction;
  switch (direction) {
    case "right":
      this.nodes[0].x += this.vx;
      // if (this.nodes[0].x + this.nodes[0].radius > 600) {alert("Game Over")}
      break;
    case "left":
      this.nodes[0].x -= this.vx;
      // if (this.nodes[0].x <= this.nodes[0].radius) {alert("Game Over")}
      break;
    case "up":
      this.nodes[0].y -= this.vy;
      // if(this.nodes[0].y <= this.nodes[0].radius) {alert("Game Over")}
      break;
    case "down":
      this.nodes[0].y += this.vy;
      // if(this.nodes[0].y + this.nodes[0].radius > 600) {alert("Game Over")}
  };

  for (var i = this.nodes.length - 1; i >= 0; i--){
      this.nodes[i].draw();
  }

//circulo cabeza vacio

};
