function Snake(ctx, canvas){
  this.ctx = ctx;
  this.canvas = canvas;
  this.radius = 15;
  this.color = "#2e7d32";
  this.direction = "right";
  this.nodes = [];
  this.nodes.push(new Node(this.ctx, this.canvas,"#000000"));
  this.vx = this.radius*2;
  this.vy = this.radius*2;
  // Coordenadas de la cabeza (de 15 a 585)
  this.x = this.nodes[0].x;
  this.y = this.nodes[0].y;
}


Snake.prototype.addNode = function(colorNode) {
  var node = new Node(this.ctx, this.canvas, "#2e7d32");
  node.x = this.nodes[this.nodes.length - 1].x;
  node.y = this.nodes[this.nodes.length - 1].y;
  this.nodes.push(node);
};

Snake.prototype.draw = function() {

  for (var i = this.nodes.length - 1; i >= 0; i--){
    if (i > 0) {
      this.nodes[i].x = this.nodes[i - 1].x;
      this.nodes[i].y = this.nodes[i - 1].y;
    }
    document.getElementById("score").innerHTML = this.nodes.length - 1 + " points!"
    //this.nodes[i].draw()
  }



  var direction = this.direction;
  switch (direction) {
    case "right":
      this.nodes[0].x += this.vx;
      if (this.nodes[0].x + this.nodes[0].radius > 600) {alert("Game Over")}
      break;
    case "left":
      this.nodes[0].x -= this.vx;
      if (this.nodes[0].x + this.nodes[0].radius <= 0) {alert("Game Over")}
      break;
    case "up":
      this.nodes[0].y -= this.vy;
      if(this.nodes[0].y + this.nodes[0].radius <= 0) {alert("Game Over")}
      break;
    case "down":
      this.nodes[0].y += this.vy;
      if(this.nodes[0].y + this.nodes[0].radius > 600) {alert("Game Over")}
  };

  for (var i = 0; i<this.nodes.length; i++){
      this.nodes[i].draw();
  }

//circulo cabeza vacio

};
