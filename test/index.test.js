/*
 * @Author: gorsonpy
 * @Date: 2023-09-27 20:07:47
 * @LastEditors: gorsonpy
 * @LastEditTime: 2023-09-27 21:19:38
 * @FilePath: \FZU_Calculator\test\index.test.js
 * @Description: 
 */

const {JSDOM} = require('jsdom');
const jsDomIntance = new JSDOM(`
<!DOCTYPE html>
<body>
    <div class="center">
        <form name="calculator">
            <input type="text" id="display">
        </form>
    </div>
</body>
</html>
`)

const window = jsDomIntance.window; // window 对象
const document = window.document; // document 对象
global.document = document;
const {
    get,
    calculates
} = require("../src/index")



test("7 + 8 = 15", () => {
    get("7")
    get("+")
    get("8")
    calculates()
    expect(document.getElementById("display").value).toBe("15")
})
