"use strict";
var Solar_System;
(function (Solar_System) {
    class Body {
        constructor(_planets, _size, _speed, _pos, _distance, _color, _angle, _desc, _name) {
            this.planets = [];
            this.size = _size;
            this.speed = _speed;
            if (_pos) {
                this.pos = _pos.copy();
            }
            else {
                this.pos = new Solar_System.Vector(0, 0, 0);
            }
            this.distance = _distance;
            this.color = _color;
            this.angle = Math.random() * Math.PI * 2;
            this.desc = _desc;
            this.name = _name;
        }
        move(_time, _orbit) {
            this.angle += this.speed * (_time * 0.00116);
            this.pos.x = _orbit.x + Math.cos(this.angle) * this.distance.x;
            this.pos.y = _orbit.y + Math.sin(this.angle) * this.distance.x;
        }
        draw() {
            Solar_System.crc2.beginPath();
            Solar_System.crc2.save();
            Solar_System.crc2.translate(this.pos.x, this.pos.y);
            Solar_System.crc2.rotate((this.speed * Math.PI) / 180);
            Solar_System.crc2.translate(this.distance.x, this.distance.y);
            Solar_System.crc2.arc(this.pos.x, this.pos.y, (this.size * 10), 0, Math.PI * 2);
            Solar_System.crc2.fillStyle = `rgb(${this.color.x}, ${this.color.y}, ${this.color.z})`;
            Solar_System.crc2.fill();
            Solar_System.crc2.closePath();
            Solar_System.crc2.restore();
        }
    }
    Solar_System.Body = Body;
    class Planet extends Body {
        constructor(_planets, _size, _speed, _pos, _distance, _color, _angle, _desc, _name, _hasRing, _moons) {
            super(_planets, _size, _speed, _pos, _distance, _color, _angle, _desc, _name);
            this.hasRing = _hasRing;
            this.moons = _moons;
        }
        move(_time, _orbit) {
            for (let moon of this.moons) {
                moon.move(_time, this.pos);
            }
            super.move(_time, _orbit);
        }
        draw() {
            for (let moon of this.moons) {
                moon.draw();
            }
            super.draw();
        }
    }
    Solar_System.Planet = Planet;
    class Moon extends Body {
        constructor(_planets, _size, _speed, _pos, _distance, _color, _angle, _desc, _name, _orbits) {
            super(_planets, _size, _speed, _pos, _distance, _color, _angle, _desc, _name);
            this.orbits = _orbits;
        }
        move(_time, _orbit) {
            super.move(_time, _orbit);
        }
    }
    Solar_System.Moon = Moon;
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Solar_System_Class.js.map