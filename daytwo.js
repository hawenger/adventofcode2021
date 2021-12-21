let horizontal = 0;
let depth = 0;

class Move {
  constructor(direction, amt) {
    this.amt = amt;
    this.direction = direction;
  }

  determineMove() {
    //down
    if (this.direction.length > 2 && this.direction.length < 5) {
      depth = depth + this.amt;
      //forward
    } else if (this.direction.length > 5) {
      horizontal = horizontal + this.amt;
      //up
    } else {
      depth = depth - this.amt;
    }
  }
}

function parseData() {
  let data =
    "forward1down 3down 2up 1down 7down 8forward 6forward 1forward 1down 6up 3down 7down 1down 6forward 6down 6forward 3up 7forward 5down 4forward 6forward 1forward 6forward 9forward 3up 1forward 7down 9forward 2up 9down 5down 3up 1down 6down 7down 8down 7forward 7forward 3down 5down 2forward 4forward 7down 8down 4down 5down 1forward 4up 6forward 6forward 4forward 5up 3up 6down 4down 8forward 4forward 5down 3forward 1down 5down 5forward 8forward 9forward 1forward 8forward 5forward 6up 8down 3forward 8up 2down 3down 9up 9forward 5down 2forward 7forward 5forward 5down 2down 3forward 7forward 9down 9forward 3forward 3down 3forward 3up 6down 4forward 3forward 3forward 7down 4forward 8up 8down 3down 2forward 2down 6down 6up 7up 9down 4up 7up 8down 6down 1forward 6forward 9forward 1forward 8down 4up 3forward 6down 5forward 7forward 5down 2forward 7down 6forward 7up 2up 5forward 3down 6down 9down 9forward 9up 7down 6down 4down 8forward 6up 6down 2forward 5up 7forward 5down 1up 8forward 2forward 4down 5down 8up 7up 5down 2forward 8forward 4up 6forward 8down 3down 2down 2forward 4forward 2forward 9up 3up 7up 3up 5forward 5up 8forward 3forward 1down 3down 8forward 6forward 5up 5down 9down 1down 9forward 9up 3forward 7forward 6forward 1up 3forward 9forward 7down 9up 6forward 2up 9forward 6forward 4up 3forward 5down 4up 8up 4up 9down 1down 7forward 7forward 2down 9forward 7forward 2down 6down 9up 6down 7down 2down 7down 6down 4down 4forward 6forward 9forward 4down 7down 5up 6down 7forward 2down 3down 1forward 1forward 5down 4down 4down 1down 9forward 6down 3forward 5up 7forward 9down 8down 3up 2up 2forward 4down 7forward 2forward 5forward 4forward 3down 8down 6forward 9down 1forward 1down 1up 8down 2forward 2up 5down 7forward 8down 7down 4forward 2forward 6up 2forward 8forward 2forward 1up 5down 4down 8forward 4down 8up 8forward 3down 5forward 2forward 1up 3forward 9up 5forward 5forward 5up 8down 6forward 3down 4up 5forward 3up 6forward 6forward 9down 7down 7down 8down 4forward 4forward 3forward 3forward 5down 3forward 8up 5forward 1up 7down 5forward 7forward 3down 3forward 2forward 1forward 4up 2down 8forward 9forward 9down 6down 1down 5forward 4down 2forward 1up 7down 9forward 3down 5down 5up 6down 6forward 8down 1up 3down 2up 1forward 5down 4down 6forward 8down 4down 5down 2forward 5forward 8down 8up 4forward 2up 2down 9forward 6forward 1forward 5up 2down 1up 7up 3forward 3down 7forward 2forward 4up 7forward 4forward 6up 2forward 4forward 2down 6down 5down 5down 6forward 9up 4down 4down 7up 6up 9up 4down 4up 7down 9down 9forward 3down 7down 7down 7down 2up 2up 1up 6down 8up 7down 4forward 8down 7up 1down 5down 3forward 6up 1down 5forward 3forward 6forward 7forward 2down 3forward 1up 9down 5up 2up 9up 2up 2forward 1down 2forward 1down 7forward 1forward 8down 9down 1forward 9forward 7forward 7down 5down 5down 3forward 6down 7down 4forward 2up 6down 3up 4up 7forward 2forward 8forward 4down 7down 9up 1down 2up 8down 2up 6forward 6up 5down 2forward 5down 4forward 7down 3down 5forward 1down 7forward 1up 1forward 4up 4forward 4forward 5forward 7down 7down 9forward 3forward 6down 7down 5down 3up 3forward 5forward 2down 1up 1up 8down 6down 4down 1forward 1down 7up 8forward 2forward 8forward 8forward 7down 1forward 8down 8forward 4down 3up 9down 8forward 9down 7up 2forward 9down 4up 3up 4up 4forward 5up 2forward 3down 5forward 5down 5up 8down 4forward 6down 6forward 7forward 2down 2up 7down 5down 9down 8down 4up 3forward 4down 8down 8down 9down 7forward 2forward 8up 5forward 8down 9forward 6up 1down 6forward 1up 4down 3forward 3forward 2down 6forward 7up 6up 9down 1forward 3forward 4forward 2up 8forward 9up 7down 2forward 2up 7down 2up 6down 2forward 9forward 3down 6down 5down 3forward 9down 8down 8down 2down 7up 3forward 1down 7up 8up 8forward 5forward 5forward 1down 8down 6forward 2up 3forward 1forward 7forward 4forward 5forward 9forward 7forward 6forward 3forward 4down 8down 1forward 6forward 9forward 6forward 9forward 6up 3down 8forward 4forward 1down 4forward 9down 8down 3up 2forward 5forward 2forward 5down 6down 3up 1down 9up 5forward 6down 7forward 1forward 9down 2down 5forward 3forward 6down 4down 5up 4forward 7forward 5down 8forward 6down 5forward 2down 7forward 4forward 8down 8forward 2forward 8down 5forward 7down 8down 1forward 8down 4up 4down 7down 6up 5forward 4forward 1forward 4down 5forward 5forward 9down 1forward 3up 7down 1down 7forward 2down 5down 6forward 5up 2down 9forward 1up 5forward 6forward 9forward 4up 4down 6up 9up 5down 2up 9down 2down 4down 8down 2forward 2forward 2down 9up 5forward 2forward 8down 2down 2down 9down 3down 9up 9up 3down 1down 9down 2forward 7down 2up 3down 9up 2up 4forward 5forward 7down 7up 7up 5down 8up 2forward 2down 3down 5forward 2forward 3forward 3down 1down 1forward 9down 5down 7forward 7forward 5up 9forward 3up 4forward 1forward 3down 4forward 9down 5down 3down 5forward 6down 6forward 2up 4down 4forward 2down 8up 9forward 9forward 4down 8forward 2forward 5forward 1forward 5up 1forward 7forward 9down 5forward 6down 1forward 6down 2forward 9down 1forward 1down 4down 6down 2up 7up 5forward 8forward 1down 8forward 1forward 2down 8forward 7down 5forward 1down 2up 7forward 7down 4down 8up 6up 4forward 7down 3up 5down 5forward 7up 7down 6forward 8down 7down 2up 3down 9down 7down 8forward 4forward 3forward 9forward 6up 7forward 5down 4down 5forward 6up 9down 6down 7down 8down 9down 4up 5down 4forward 5forward 3down 3down 7up 8forward 5down 8down 1down 6down 9up 4up 1down 8down 3down 8up 4down 7down 6forward 7up 9down 4down 1down 6down 2forward 7down 2down 7forward 3forward 6up 2down 4up 1forward 4up 2down 4up 3down 8up 9forward 8down 5down 4forward 8down 1down 8forward 3down 4forward 5down 5up 9forward 1down 9down 1forward 4forward 9up 1forward 4forward 2down 9down 1forward 1down 2forward 2down 5up 4up 7down 8forward 3up 1down 4forward 5up 2forward 4forward 2down 1forward 4forward 1up 5forward 8forward 4forward 1down 6down 7up 4forward 9up 6forward 9forward 3forward 2down 2forward 7up 7forward 7down 4down 6forward 8up 8forward 1forward 3forward 3up 8down 1up 9forward 1up 1down 7forward 7up 5forward 5up 9up 3forward 2forward 6up 1forward 5up 1down 3down 5forward 8up 5forward 1down 8forward 4down 3down 1down 7forward 7forward 3down 4forward 9up 5down 2forward 4up 7up 5forward 3down 7forward 8up 4up 2forward 2down 9forward 4down 5forward 2down 9down 5up 7forward 3down 8forward 7forward 9down 5forward 2forward 9forward 5down 5up 4down 6down 6forward 8forward 5forward 4down 5forward 2down 8forward 9down 1down 8down 7up 9down 7down 1forward 7forward 9forward 8up 2forward 6down 3down 6up 4forward 4forward 5down 9down 5forward 1down 2forward 1down 1up 1up 7up 5forward 6forward 3".match(
      /[a-zA-Z]+|[0-9]+/g
    );
  return data;
}

function logMoves(data) {
  for (let i = 0; i < data.length - 2; i++) {
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
