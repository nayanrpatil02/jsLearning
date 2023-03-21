console.log("==================== PATTERN 1 =====================");
/*

*
**
***
****
*****
*/


let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

console.log("==================== PATTERN 2 =====================");
/* 
*****
****
***
**
*
*/

let nn = 5;
let string1 = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);