const fs = require("fs");
try {
  fs.unlinkSync("build/service-worker.js");
} catch (err) {
  console.error(err);
}
