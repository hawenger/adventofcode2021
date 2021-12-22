//Numbers 0 - 9 to be converted into a binary key
const key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const binaryKey = key.map((x) => (x >>> 0).toString(2));

const diagnosticReport = [234, 567, 678, 999];
const stringDiagnostics = diagnosticReport.map((x) => x.toString());
console.log(stringDiagnostics);
console.log(binaryKey);
//diagnosticReport == puzzle input

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
