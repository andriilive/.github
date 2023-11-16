const fs = require('fs');
const path = require('path')
const files = fs.readdirSync(path.resolve(__dirname, './public/'))

console.log('\n');
console.log(files);

let endpoints = []
let obj = {}

// files.forEach((file) => {
//     if (file.indexOf('.json') > -1) {
//         jsonObject = JSON.parse(fs.readFileSync('./db/' + file));
//
//         if( isJson(fs.readFileSync('./db/' + file))) {
//             Object.keys(jsonObject).forEach(function(idx) {
//                 endpoints.push(idx);
//             });
//             console.log('🗒    JSON file loaded : ' + file);
//             _.extend(obj, require(path.resolve(__dirname, './db/', file)));
//         }
//     }
// })
