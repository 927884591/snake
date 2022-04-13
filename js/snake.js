class Snake {
  constructor(map) {
    this.map = map;
    this.snake = [];
    this.direction = "right";
    this.creSnake();
  }
  //获取头的坐标
  pos() {
    //
    const head = this.snake[0];
    //如果没有头，坐标就是0，0
    if (!head) {
      return { left: 0, top: 0 };
    }
    //有头就计算位置
    const obj = { left: head.offsetLeft, top: head.offsetTop };
    console.log(head.offsetLeft);
    switch (this.direction) {
      case "top":
        obj.top -= 20;
        break;
      case "buttom":
        obj.top += 20;
        break;
      case "left":
        obj.left -= 20;
        break;
      case "right":
        obj.left += 20;
        break;
    }
    return obj;
  }
  //创建一个body，如果没有头就创建head
  creHead() {
    //获取当前头的坐标
    const pos = this.pos();
    const head = this.snake[0];
    console.log(this.snake);
    //把数组的第一个改成body，然后在创建一个div写成head
    if (head) {
      head.className = "body";
      console.log(111);
      console.log(head);
    }
    //创建一个div类为head
    const div = document.createElement("div");
    div.className = "head";
    console.log(pos.left);
    div.style.left = pos.left + "px";
    div.style.top = pos.top + "px";
    this.snake.unshift(div);
    this.map.appendChild(div);
  }
  //初始化蛇
  creSnake() {
    for (let i = 0; i < 3; i++) {
      this.creHead();
    }
  }
  //让蛇动起来
  move() {
    const body = this.snake.pop();
    body.remove();
    this.creHead();
  }
  //判断是否死亡
  isDie() {
    //需要拿到头的坐标
    const head = this.snake[0];
    const x = head.offsetLeft;
    const y = head.offsetTop;
    let flag = false;
    if (
      x < 0 ||
      y < 0 ||
      x >= this.map.clientWidth ||
      y >= this.map.clientHeight
    ) {
      return true;
    } else {
      //如果身体头触碰到身体，也返回true
      const body = this.snake.slice(1);
      body.forEach((item) => {
        if (x == item.offsetLeft && y == item.offsetTop) {
          flag = true;
        }
      });
      return flag;
    }
  }
  //判断是否吃到食物
  isEat(food) {
    const x = this.snake[0].offsetLeft;
    const y = this.snake[0].offsetTop;
    if (x == food.x && y == food.y) {
      return true;
    } else {
      return false;
    }
  }
}
