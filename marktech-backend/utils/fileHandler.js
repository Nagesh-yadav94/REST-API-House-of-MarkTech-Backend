const fs = require("fs");
const path = require("path");

function readData(file) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, `../data/${file}`), "utf8"));
}

function writeData(file, data) {
  fs.writeFileSync(path.join(__dirname, `../data/${file}`), JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData };
