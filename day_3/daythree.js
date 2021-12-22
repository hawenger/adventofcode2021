const diagnosticReport = ["0", "100", "891234"];

let binaryDiagnostics = diagnosticReport.map((x) => (x >>> 0).toString(2));
console.log(binaryDiagnostics);
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
