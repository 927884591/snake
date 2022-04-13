class Game {
  constructor(map, score, level) {
    //获取map元素
    this.map = document.querySelector(map);
    //获取score元素
    this.score = document.querySelector(score);
    //创建一个食物
    this.food = new Food(this.map);
    //初始化身体
    this.snake = new Snake(this.map);
    //设置好level
    this.level = document.querySelector(level);
    //定时器
    this.timer = 0;
    //调用游戏控制器方法
    this.change();
    //计数器
    this.count = 0;
  }
  //开始游戏方法
  start() {
    this.timer = setInterval(() => {
      //游戏开始蛇动起来
      this.snake.move();
      //判断是否吃到食物了
      if (this.snake.isEat(this.food)) {
        this.updataScore();
        this.snake.creHead();
        this.food.newFood();
      }
      //判断蛇是否撞墙
      if (this.snake.isDie()) {
        window.alert("Game Over");
        clearInterval(this.timer);
        window.location.reload();
      }
    }, 500 / this.level.innerHTML);
  }
  //暂停游戏的方法
  stop() {
    clearInterval(this.timer);
  }
  //重新开始游戏
  restart() {
    window.location.reload();
  }
  //游戏控制器
  change() {
    document.addEventListener("keydown", (e) => {
      e = e || window.event;
      const code = e.key;
      console.log(code);
      switch (code) {
        case "ArrowLeft":
          this.snake.direction = "left";
          break;
        case "ArrowUp":
          this.snake.direction = "top";
          break;
        case "ArrowRight":
          console.log(111);
          this.snake.direction = "right";
          break;
        case "ArrowDown":
          this.snake.direction = "buttom";
          break;
      }
    });
  }
  //计算成绩并刷新成绩
  updataScore() {
    this.count++;
    this.score.innerHTML = this.count * 90 + this.level.innerHTML * 10;
    if (this.count % 10 === 0) {
      this.level.innerHTML++;
      this.stop();
      this.start();
    }
  }
}
