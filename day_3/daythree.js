//Numbers 0 - 9 to be converted into a binary key
//const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//const binaryKey = key.map((x) => (x >>> 0).toString(2));
//for (let i = 0; i < binaryKey.length; i++) {
//    let binaryString = binaryKey[i];
//    for (let y = 0; i < gamma.length; y++) {
//        let parsedY = parseInt(y, 10);
//        if (parsedY == 1) {
//          counter = counter + 1;
//        }
//      }
//}
const diagnosticReport = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];
const diagnosticsMap = new Map();
//let stringDiagnostics;
for (let i = 0; i < diagnosticReport.length; i++) {
  let diagnosticString = diagnosticReport[i];
  for (let y = 0; y < diagnosticString.length; y++) {
    //if (parseInt(diagnosticString[y], 10) == 0) {
    diagnosticsMap.set(y, parseInt(diagnosticString[y], 10));
    //console.log(parseInt(diagnosticString[y], 10));
    //} else {
    //  console.log(true);
    //}
    //console.log(diagnosticString[y]);
  }
  //for (let key of diagnosticsMap.keys()) {
  // console.log(key);
  //}
  //for (let value of diagnosticsMap.values()) {
  //console.log(value);
  //}
  const newMap = new Map();
  diagnosticsMap.forEach(function (key) {
    let x = 0;
    let i = key;
    if (key == key) {
      x = key.value + x;
    } else {
      newMap.set(i, x);
      i++;
      let x = key.value;
    }
  });
  newMap.forEach(function (value, key) {
    console.log(key, value);
  });
  //console.log(diagnosticsMap.get(4));
  //console.log(stringBinary);
  //let sum = 0;
  //for(i = 0; i < )
  //diagnosticsMap(0).forEach((element) => {
  //  sum = sum + element;
  //});
  // console.log(sum);
}
//if (diagnosticsMap.get(0) < diagnosticReport.length) {
//console.log(true);
//} else {
//  console.log(false);
//}

//const stringDiagnostics = diagnosticReport.map((x) => x.toString(2));
//console.log(stringDiagnostics);
for (let i = 0; i < diagnosticReport.length; i++) {
  //for(let y = 0; i < diagnosticString.length; y++) {

  //}
  let b = diagnosticReport[i].toString();
  let a = parseInt(b);
  // console.log(a);
}
//const binaryStringDiagnostics = diagnosticReport.map((x) => x.toString());
//const binaryStringDiagnostics = diagnosticReport.map((x) =>
//  (x >>> 0).toString(2)
//);
//console.log(binaryKey);
//console.log(binaryKey);
//diagnosticReport == puzzle input

//Gamma Rate
//finding the most common bit in the corresponding position

function findCorrespondingBit() {}
function findGamma() {
  for (let i = 0; i < diagnosticReport.length; i++) {}
}

//gammaRate == most common bit in the same postion of all numbers in diagnostic report

//epsilonRate

//const powerConsumption = gammaRate * epsilonRate;

//Gamma Rate

//Create map of ##s 0-9 in binary as string;
//Switch for 0-9
//Loop through diagnostic report, comparing each   each number in the diagnostic report into a string of the binary equivalent
//for each position in the diagnopstic report
//convert the number to bits
//find the most common number
