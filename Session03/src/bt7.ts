let input: string = "banana";
let result: string = "";

for (let i: number = 0; i < input.length; i++) {
    let char: string = input.charAt(i); 
    if (!result.includes(char)) {
        result += char;
    }
}

console.log(result); 
