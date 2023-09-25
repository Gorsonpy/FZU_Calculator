/*
 * @Author: gorsonpy
 * @Date: 2023-09-25 20:18:33
 * @LastEditors: gorsonpy
 * @LastEditTime: 2023-09-25 20:30:24
 * @FilePath: \cal\c.js
 * @Description: 
 */
/* limpa o display */ 
document.getElementById("clear").addEventListener("click", function() {
	document.getElementById("display").value = "";
});
/* recebe os valores */
function get(value) {
	document.getElementById("display").value += value; 
} 

/* calcula */
function calculates() {
	var result = 0;
	result = document.getElementById("display").value;
	document.getElementById("display").value = "";
	document.getElementById("display").value = eval(result);
};