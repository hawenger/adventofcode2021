const { diagnosticReport } = require("./diagnosticReport");

let gammaRate;
let epsilonRate;

let sum;
for (let x of diagnosticReport) {
  for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
}
