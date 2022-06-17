// 👇️ if using ES6 imports uncomment next line
// import {readFile, writeFile, writeFileSync, promises as fsPromises} from 'fs';
const {readFile, writeFile, promises: fsPromises} = require('fs');

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });
var args = process.argv.slice(2);


readFile('./src/manifest.yml', 'utf-8', function (err, contents) {
  if (err) {
    console.log(err);
    return;
  }

  let old = contents.substring(670, 710);
  const replaced = contents.replace(old, `icuadrosaforo255/node-devops:${args}`);
  // const replaced = contents.replaceAt(671, ' ');
  // for (let step = 673; step < 704; step=step+2) {
  //   replaced.replaceAt(step, ' ');
  // }

  writeFile('./src/manifest.yml', replaced, 'utf-8', function (err) {
    console.log(err);
  });
});


String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
      return this.valueOf();
  }

  return this.substring(0, index) + replacement + this.substring(index + 1);
}