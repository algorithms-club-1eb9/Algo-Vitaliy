const balancer = require(__dirname + '\\areBalaced.js');

var fs = require('fs');
const text = fs.readFileSync(__dirname + '/testText.js').toString();
//balancer(text);
module.exports = {
    balancer,
}
console.log(balancer(text));