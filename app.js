//合計を計算するプログラム

'use strict';
//JavaScript を Strict モードで利用するための記述です。
const number = process.argv[2] || 0;
//number という定数に、process.argv[2] の値を代入します。
let sum = 0;

for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
app.js
