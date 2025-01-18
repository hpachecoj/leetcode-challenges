var isValid = function(s){
    const pairs = { ")": "(", "}": "{", "]": "[" };
    let stack = []

    for (let char of s){
        if(Object.values(pairs).includes(char)){
            stack.push(char);
        }else if(Object.keys(pairs).includes(char)){
            if(!stack.length || pairs[char] !== stack.pop()){
                return false;
            }
        }
    }
    return !stack.length;
}


const pairs = { ")": "(", "}": "{", "]": "[" };
console.log(Object.values(pairs))