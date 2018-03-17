/*var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFileSync('linkedList.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        const t = areBaleced(data);
        console.log(t);
        res.writeContinue(data);
        res.end();
    });
    }).listen(8080);
  */

    module.exports = (string) => {
        var parentheses = "{}[]()",
        stack = [],
        index, character, curentPosition;

        for(i = 0; character = string[i]; i++) {
            curentPosition = parentheses.indexOf(character);

            if(curentPosition === -1) {
                continue;
            }
            if(curentPosition % 2 === 0) {
                stack.push(curentPosition + 1);
            } else {
                if(stack.length === 0 || stack.pop() !==curentPosition) {
                    return false;
                }
            }
        }
        return stack.length ===0;
    }
    //console.log('{}([]) true', areBaleced('{}([])'));







