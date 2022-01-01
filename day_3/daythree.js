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
console.log(parseInt(gamma, 2));

//Fun Converting Booleans to Ints
//let q = 1;
//let p = +!q;
//console.log(p);
