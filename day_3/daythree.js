const { diagnosticReport } = require("./diagnosticReport");

const gammaRate = [];
const epsilonRate = [];

//Diagnostics Report Map
const dRMap = new Map();

//Loop through each data piece in Diagnostic Report
for (let node of diagnosticReport) {
  for (let i = 0; i < node.length; i++) {
    //Convert String to Int
    let x = parseInt(node[i]);

    if (dRMap.get(i) == undefined) {
      //If Value in Key is undefined, first in Loop and set Value to X
      dRMap.set(i, x);
    } else {
      //If Previous Values in Corresponding Key, Add Values
      dRMap.set(i, x + dRMap.get(i));
    }
  }
}
// Array index corresponds to columns in data and should equal the number of ones in each column
//Check to see if # of 1s is higher than half of diagnostic report length indicating more ones than zeros in column

for (let [key, value] of dRMap) {
  if (value > diagnosticReport.length / 2) {
    gammaRate.push("1");
    epsilonRate.push("0");
  } else {
    gammaRate.push("0");
    epsilonRate.push("1");
  }
}
let gamma = gammaRate.join("");
let epsi = epsilonRate.join("");
let a = dRMap.get(1);

//console.log(a);
//console.log(gammaRate);
//console.log(parseInt(gamma, 2) * parseInt(epsi, 2));

//PART TWO
let diagnosticCopy = JSON.parse(JSON.stringify(diagnosticReport));
function find(diagnosticCopy) {
  let i = 0;
  if (i < 10) {
    //diagnosticCopy.length > 0) {
    loop(diagnosticCopy);
    i++;
  }
}
find(diagnosticCopy);
function loop(diagnosticCopy) {
  for (let i = 0; i < gammaRate.length; i++) {
    let x = gammaRate[i];
    let a = diagnosticCopy[i];
    let b = parseInt(a[0], 2);
    if (b == x) {
      console.log(b);
    }

    //for (let j = 0; j < diagnosticCopy.length; j++) {
    //  let a = diagnosticCopy[j];
    //  if (diagnosticCopy.length < 2) {
    //    break;
    //  }
    //  parseInt(a[0]);
    //  //Compare x to parsedInt first letter in j
    //}
  }
  return diagnosticCopy;
}

//Fun Converting Booleans to Ints
//let q = 1;
//let p = +!q;
//console.log(p);

//
//let lifeSupportRating = oxygenGeneratorRating * cO2ScrubberRating;

//Consider first bit of numbers
//Keep only numbers selected by the bit criteria
//Discard numbers that do not match the bit criteria
//Stop if one number left as this is answer
//Otherwise, repeat the process with the next bit to the right

//determine most common value in the current bit position and keep only values with that number
//if 0 and 1 are equal, keep only 1 values
