function Game(){
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = 600;
  this.canvas.height = 600;
  this.snake = new Snake(this.ctx, this.canvas);
  // this.fruit = new Fruit(this.ctx);
  this.createFruit();
  document.onkeydown = this.onKeyDown.bind(this);
};

Game.prototype.update = function() {
  this.ctx.clearRect(0,0, canvas.width, canvas.height);
};

Game.prototype.createFruit = function(){
  var fruitX = Math.floor(Math.random()*this.canvas.width);
  var fruitY = Math.floor(Math.random()*this.canvas.height);
  this.fruit = new Fruit(this.ctx, fruitX, fruitY);
}

Game.prototype.draw = function(){
  this.update();
  this.snake.draw();
  this.fruit.draw();

};

Game.prototype.onKeyDown = function(event) {
  console.log(event);
  var KEYBOARD = event.keyCode;
  var i = 1;
  switch (KEYBOARD) {
    //move right
    case 39:
      if (this.snake.direction != "left") {
        this.snake.direction = "right"
      }
      break;
    //move left
    case 37:
      if ( this.snake.direction != "right"){
        this.snake.direction = "left"
      }
      break;
    //move up
    case 38:
      if (this.snake.direction != "down"){
        this.snake.direction = "up"
      }
      break;
    //move down
    case 40:
      if (this.snake.direction!= "up") {
        this.snake.direction = "down";
      }
      break;
  }
};

Game.prototype.collide = function(){
  return (this.snake.x === this.fruit.x) && (this.snake.y === this.fruit.y);
};

Game.prototype.checkCollide = function() {
  if (this.collide() === true){
    this.createFruit();
    this.snake.addNode();
  }
};

// Start Game

var game = new Game();
// setInterval(function() {
//   game.draw();
// }, 20);

setInterval(function(){
  game.draw();
  game.checkCollide();
}, 5000/48);

// setInterval(function() {
//   this.snake.addNode();
// }.bind(game),1000);
