"use strict";
var Solar_System;
(function (Solar_System) {
    class Vector {
        constructor(_x, _y, _z) {
            this.set(_x, _y, _z);
        }
        set(_x, _y, _z) {
            this.x = _x;
            this.y = _y;
            this.z = _z;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        random(_min, _max) {
            const length = _min + Math.random() * (_max - _min);
            const dir = Math.random() * 2 * Math.PI;
            this.set(Math.cos(dir), Math.sin(dir), Math.tan(dir));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y, this.z);
        }
        mag() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
    Solar_System.Vector = Vector;
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Vector.js.map