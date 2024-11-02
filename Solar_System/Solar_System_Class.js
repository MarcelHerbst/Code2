"use strict";
var Solar_System;
(function (Solar_System) {
    class Body {
        constructor(_planets, _size, _speed, _pos, _color, _desc, _name) {
            this.planets = [];
            this.size = _size;
            this.speed = _speed;
            this.pos = _pos;
            this.color = _color;
            this.desc = _desc;
            this.name = _name;
        }
    }
    Solar_System.Body = Body;
    class Planet extends Body {
        constructor(_planets, _size, _speed, _pos, _color, _desc, _name, _hasRing, _moons) {
            super(_planets, _size, _speed, _pos, _color, _desc, _name);
            this.hasRing = _hasRing;
            this.moons = _moons;
        }
    }
    Solar_System.Planet = Planet;
    class Moon extends Body {
    }
    Solar_System.Moon = Moon;
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Solar_System_Class.js.map