// following this video: https://www.youtube.com/watch?v=UeZ1pTg_nMo
// coded by me

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth - 4;
canvas.height = innerHeight - 4;

class Cell {
  constructor(effect, x, y) {
    this.effect = effect;
    this.x = x;
    this.y = y;
    this.width = this.effect.cellWidth;
    this.height = this.effect.cellHeight;
  }
  draw(context) {
    context.strokeRect(this.x, this.y, this.width, this.height);
  }
}

class Effect {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.cellWidth = this.width / 35; // each cell width is the canvas width which is defined above
    this.cellHeight = this.height / 35;
    this.Grid = [];
    // array of cells
    this.createGrid();
    console.log(this.cell);
  }
  createGrid() {
    // custom create grid method
    for (let y = 0; y < this.height; y += this.cellHeight) {
      //rows, top to bottom (wow, this java example for loops/christmas tree was very useful@)
      for (let x = 0; x < this.width; x += this.cellWidth) {
        this.Grid.push(new Cell(this, x, y)); // columns, left to right
      }
    }
  }
  render(context) {
    this.Grid.forEach((cell) => {
      cell.draw(context);
    });
  }
}

const effect = new Effect(canvas); // pass in canvas from line 1
console.log(effect);
effect.render(ctx); // ctx from line 2
