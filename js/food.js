export default class Food {
  constructor(map) {
    this.map = map;
    this.food = document.createElement("div");
    this.food.className = "food";
    this.map.appendChild(this.food);
    this.x = 0;
    this.y = 0;
    this.newFood();
  }
  newFood() {
    console.log(this.map, this.map.clientHeight);
    const xNum = this.map.clientWidth / 20;
    const yNum = this.map.clientHeight / 20;
    const x = Math.floor(Math.random() * xNum) * 20;
    const y = Math.floor(Math.random() * yNum) * 20;
    this.x = x;
    this.y = y;
    this.food.style.left = this.x + "px";
    this.food.style.top = this.y + "px";

    console.log(x, y);
  }
}
