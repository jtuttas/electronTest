"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter_1 = require("./counter");
function up() {
    console.log("up");
    c.inc();
    document.querySelector("#out").innerHTML = "" + c.getValue();
}
function down() {
    console.log("down");
    c.dec();
    document.querySelector("#out").innerHTML = "" + c.getValue();
}
var c = new counter_1.counter();
var b1 = document.querySelector('#btnup');
b1.addEventListener('click', up);
document.querySelector('#btndown').addEventListener('click', down);
//# sourceMappingURL=render.js.map