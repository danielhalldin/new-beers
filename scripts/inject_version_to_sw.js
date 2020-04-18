const fs = require("fs");
const packageJson = require(`../package.json`);

let serviceWorker;
try {
  serviceWorker = fs.readFileSync("build/sw.js", "utf8");
} catch (err) {
  console.error(err);
}
serviceWorker = serviceWorker.replace(/__VERSION/gi, packageJson.version);

fs.writeFileSync("build/sw.js", serviceWorker);
