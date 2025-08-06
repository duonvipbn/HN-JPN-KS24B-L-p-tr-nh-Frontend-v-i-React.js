function toNumber(value: number | string): number | null {
    if (typeof value === "number") return value;
    let num = Number(value);
    return isNaN(num) ? null : num;
}
function add(a: number | string, b: number | string): number | string {
    let numA = toNumber(a);
    let numB = toNumber(b);
    if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
    return numA + numB;
}

function subtract(a: number | string, b: number | string): number | string {
    let numA = toNumber(a);
    let numB = toNumber(b);
    if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
    return numA - numB;
}

function multiply(a: number | string, b: number | string): number | string {
    let numA = toNumber(a);
    let numB = toNumber(b);
    if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
    return numA * numB;
}
function divide(a: number | string, b: number | string): number | string {
    let numA = toNumber(a);
    let numB = toNumber(b);
    if (numA === null || numB === null) return "Dữ liệu không hợp lệ";
    if (numB === 0) return "Không thể chia cho 0";
    return numA / numB;
}

console.log(add(5, "3"));        
console.log(subtract("10", 4));  
console.log(multiply("2", "5")); 
console.log(divide(20, "4"));    
console.log(add("abc", 5));    
