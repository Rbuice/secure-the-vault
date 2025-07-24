let code1;
code1 = 7 + 3;
let code2 = 80 - 120 / 3;
let code3 = 40 - (4 % 3);
let message = "The vault has been secured. The combination is:";
let codeA = code1 + "-" + code2 + "-" + code3;
let codeB = `${code1}-${code2}-${code3}`;
console.log(message + " " + codeA + " " + codeB);
