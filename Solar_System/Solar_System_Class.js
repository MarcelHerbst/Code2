"use strict";
var Solar_System;
(function (Solar_System) {
    class Body {
        constructor(_planets, _size, _speed, _pos, _distance, _color, _desc, _name) {
            this.planets = [];
            this.size = _size;
            this.speed = _speed;
            this.pos = _pos;
            this.distance = _distance;
            this.color = _color;
            this.desc = _desc;
            this.name = _name;
        }
        move(_time) {
            Solar_System.crc2.rotate((this.speed * _time * Math.PI) / 180);
            // crc2.translate(this.distance.x, this.distance.y);
        }
        draw() {
            console.log("Body Draw");
            const bodyPath = new Path2D();
            Solar_System.crc2.save();
            Solar_System.crc2.translate(this.pos.x, this.pos.y);
            Solar_System.crc2.rotate((this.speed * Math.PI) / 180);
            Solar_System.crc2.translate(this.distance.x, this.distance.y);
            bodyPath.ellipse(0, 0, 10 * this.size, 10 * this.size, 0, 0, Math.PI * 2);
            Solar_System.crc2.fillStyle = `rgb(${this.color.x}, ${this.color.y}, ${this.color.z})`;
            Solar_System.crc2.strokeStyle = `rgb(${this.color.x}, ${this.color.y}, ${this.color.z})`;
            Solar_System.crc2.fill(bodyPath);
            Solar_System.crc2.restore();
        }
    }
    Solar_System.Body = Body;
    class Planet extends Body {
        constructor(_planets, _size, _speed, _pos, _distance, _color, _desc, _name, _hasRing, _moons) {
            super(_planets, _size, _speed, _pos, _distance, _color, _desc, _name);
            this.hasRing = _hasRing;
            this.moons = _moons;
        }
        move(_time) {
            super.move(_time);
        }
    }
    Solar_System.Planet = Planet;
    class Moon extends Body {
        constructor(_planets, _size, _speed, _pos, _distance, _color, _desc, _name, _orbits) {
            super(_planets, _size, _speed, _pos, _distance, _color, _desc, _name);
            this.orbits = _orbits;
        }
        move(_time) {
            super.move(_time);
            Solar_System.crc2.translate(this.distance.x, this.distance.y);
            Solar_System.crc2.rotate((this.speed * Math.PI) / 180);
        }
    }
    Solar_System.Moon = Moon;
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Solar_System_Class.js.map