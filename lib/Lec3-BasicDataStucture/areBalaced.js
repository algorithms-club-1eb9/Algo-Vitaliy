module.exports =  (string) => {
        let parentheses = "{}[]()",
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

//"test": "node ./node_modules/eslint/bin/eslint.js lib && node ./node_modules/mocha/bin/mocha --recursive lib",
//"test": "node ./node_modules/mocha/bin/mocha --recursive lib",






