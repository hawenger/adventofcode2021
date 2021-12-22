let horizontal = 0;
let depth = 0;
let aim = 0;

class Move {
  constructor(direction, amt) {
    this.amt = amt;
    this.direction = direction;
  }

  determineMove() {
    //down
    if (this.direction.length > 2 && this.direction.length < 5) {
      // Removed for part 2: depth = depth + this.amt;
      aim = aim + this.amt;
      //forward
    } else if (this.direction.length > 5) {
      let x = aim * this.amt;
      horizontal = horizontal + this.amt;
      depth = depth + x;
      //up
    } else {
      // Removed for part 2: depth = depth - this.amt;
      aim = aim - this.amt;
    }
  }
}

function parseData() {
  let data = "forward 5down 5forward 8up 3down 8forward 2".match(
    /[a-zA-Z]+|[0-9]+/g
  );
  return data;
}

function logMoves(data) {
  for (let i = 0; i < data.length; i++) {
    let move = new Move(data[i], parseInt(data[i + 1]));
    move.determineMove();
    //console.log(move);
    //move.determineMove();
    //console.log("  " + move + " ");
    i++;
  }
}

function run() {
  const data = parseData();
  console.log(data);
  logMoves(data);
  console.log(horizontal);
  console.log(depth);
  console.log(horizontal * depth);
}

run();
