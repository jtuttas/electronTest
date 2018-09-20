"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var counter = /** @class */ (function () {
    function counter() {
        this.value = 0;
    }
    counter.prototype.inc = function () {
        this.value++;
    };
    counter.prototype.dec = function () {
        this.value--;
    };
    counter.prototype.getValue = function () {
        return this.value;
    };
    return counter;
}());
exports.counter = counter;
//# sourceMappingURL=counter.js.map