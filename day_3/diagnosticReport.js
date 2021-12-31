const path = require("path");
const fs = require("fs");

const diagnosticReport = fs
  .readFileSync(path.join(__dirname, "diagnosticReport.txt"), "utf8")
  .toString();

module.exports = {
  diagnosticReport,
};
