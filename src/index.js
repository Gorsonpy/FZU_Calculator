/*
 * @Author: gorsonpy
 * @Date: 2023-09-27 18:14:34
 * @LastEditors: gorsonpy
 * @LastEditTime: 2023-09-28 14:43:16
 * @FilePath: \FZU_Calculator\src\index.js
 * @Description: 
 */

/*
* @Author: gorsonpy
* @Date: 2023-09-25 20:18:33
* @LastEditors: gorsonpy
* @LastEditTime: 2023-09-25 20:30:24
* @FilePath: \cal\c.js
* @Description: 
*/
/* limpa o display */
// 创建一个自定义符号表

// 将默认角度单位设置为度数
 math.config({
     number: 'BigNumber',
     precision: 64,
 });
 const customSymbols = {
     Π: math.pi,
     e: math.e,
 };


// 现在 Math.js

const errMsg = "undefined";
var expression = ""; //实际运算的表达式

// document.getElementById("clear").addEventListener("click", function () {
//     document.getElementById("display").value = "";
//     expression = "";
// });

// document.getElementById("back").addEventListener("click", function () {
//     str = document.getElementById("display").value;
//     console.log(str);
//     document.getElementById("display").value = str.slice(0, -1);
//     expression = expression.slice(0, -1);
// });
function clearf() {
    document.getElementById("display").value = "";
    expression = "";
}
function back() {
    str = document.getElementById("display").value;
    document.getElementById("display").value = str.slice(0, -1);
    expression = expression.slice(0, -1);
}
/* recebe os valores */
function get(value) {
    if (document.getElementById("display").value === errMsg) {
        document.getElementById("display").value = "";
    }
    document.getElementById("display").value += value;
    expression += value;
}
function pow() {
    if (document.getElementById("display").value === errMsg) {
        document.getElementById("display").value = "";
    }
    document.getElementById("display").value += "^";
    expression += "^";
}
function pow2() {
    if (document.getElementById("display").value === errMsg) {
        document.getElementById("display").value = "";
    }
    document.getElementById("display").value += "^2";
    expression += "^2";
}
function get_with_left_bracket(value) {
    if (document.getElementById("display").value === errMsg) {
        document.getElementById("display").value = "";
    }
    document.getElementById("display").value += value;
    document.getElementById("display").value += "(";
    expression += value;
    expression += "(";
}



/* calcula */
function calculates() {
    document.getElementById("display").value = "";
    var result = "";

    if (expression === "") {
        document.getElementById("display").value = "";
        expression = "";
    } else {
        try {
            result = math.evaluate(expression, customSymbols);
        } catch (error) {
            console.error("An error occurred while evaluating the expression: " + error);
            result = errMsg; // 设置一个错误提示
        }
        document.getElementById("display").value = result;
        expression = result;
    }
};
