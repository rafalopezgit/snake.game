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
  do{
    condition = false
    var fruitX = Math.floor(Math.random()*19+1);
    var fruitY = Math.floor(Math.random()*19+1);
    fruitX = (fruitX * 30) - 15;
    fruitY = (fruitY * 30) - 15;

    for (var a=0; a<this.snake.nodes.length; a++){
      if(this.snake.nodes[a].x == fruitX && this.snake.nodes[a].y == fruitY)
        {condition = true}
    }

  } while (condition)
    this.fruit = new Fruit(this.ctx, fruitX, fruitY);
  };

Game.prototype.draw = function(){
  this.update();
  this.snake.draw();
  this.fruit.draw();

};

Game.prototype.onKeyDown = function(event) {
  // console.log(event);
  var KEYBOARD = event.keyCode;
  // var i = 1;
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

// Game start when press Enter
    case 13:
    document.getElementById("playBtn").style.visibility = "hidden";
    game.startGame();
      break;
    }
};

Game.prototype.collide = function(){
  if (game.snake.nodes[0].x === game.fruit.x && game.snake.nodes[0].y === game.fruit.y) return 1;

  for(var i=1;i<this.snake.nodes.length;i++){
    if(this.snake.nodes[i].x == game.snake.nodes[0].x && this.snake.nodes[i].y == game.snake.nodes[0].y)
    return -1
  }
  return 0
};

Game.prototype.checkCollide = function() {
  var collide = game.collide()
  if (collide == 1){
    game.createFruit();
    game.snake.addNode();
  } else if (collide == -1){
    alert("Game Over")
    location.reload();
  }
};

// Inicio del juego

var game = new Game();


Game.prototype.startGame = function(){
    setInterval(function(){
    game.draw();
    game.checkCollide();
  }, 5000/48)
};


//Para hacer crecer la serpiente sin colisión:
// setInterval(function() {
//   this.snake.addNode();
// }.bind(game),1000);
