namespace Solar_System
{
    export class Body
    {
        public planets: Body[];
        public size: number;
        public speed: number;
        public pos: Vector;
        public distance: Vector;
        public color: Vector;
        public angle: number;
        public desc?: string;
        public name?: string;

        constructor(_planets: Body[], _size: number, _speed: number, _pos: Vector, _distance: Vector, _color: Vector, _angle: number, _desc?: string, _name?: string)
        {

            this.planets = [];
            this.size = _size;
            this.speed = _speed;

            if (_pos)
            {
                this.pos = _pos
            }
            else
            {
                this.pos = new Vector(0, 0, 0);
            }

            this.distance = _distance;
            this.color = _color;
            this.angle = Math.random() * Math.PI *2;
            this.desc = _desc;
            this.name = _name;



        }

        move(_time: number, _orbit: Vector): void
        {
            const offset: number = 10;
            this.angle += this.speed * (_time * 0.00116);
            this.pos.x = _orbit.x + Math.cos(this.angle) * this.distance.x - offset;
            this.pos.y = _orbit.y + Math.sin(this.angle) * this.distance.x;
            if (this instanceof Moon)
            {
                this.angle += this.speed * (_time * 0.00116);
                this.pos.x += Math.cos(this.angle) * this.distance.x + offset;
                this.pos.y += Math.sin(this.angle) * this.distance.x;
            }
        }

        draw(): void
        {

            crc2.beginPath();
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.rotate((this.speed * Math.PI) / 180);
            crc2.translate(this.distance.x, this.distance.y);
            crc2.arc(this.pos.x, this.pos.y, (this.size * 10), 0, Math.PI * 2);
            crc2.fillStyle = `rgb(${this.color.x}, ${this.color.y}, ${this.color.z})`;
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }

    export class Planet extends Body
    {
        public hasRing: boolean;
        public moons: Body[];

        constructor(_planets: Body[], _size: number, _speed: number, _pos: Vector, _distance: Vector, _color: Vector, _angle: number, _desc: string, _name: string, _hasRing: boolean, _moons: Body[])
        {
            super(_planets, _size, _speed, _pos, _distance, _color, _angle, _desc, _name);
            this.hasRing = _hasRing;
            this.moons = _moons;
        }

        move(_time: number, _orbit: Vector): void
        {

            for (let moon of this.moons)
            {
                moon.move(_time, new Vector(this.pos.x + (this.distance.x/2) - (this.size), this.pos.y, 0));
            }
            super.move(_time, _orbit);

        }

        draw(): void
        {
            for (let moon of this.moons)
            {
                moon.draw();
            }
            super.draw();
        }
    }



    export class Moon extends Body
    {
        public orbits: string;

        constructor(_planets: Body[], _size: number, _speed: number, _pos: Vector, _distance: Vector, _color: Vector, _angle: number, _desc: string, _name: string, _orbits: string)
        {
            super(_planets, _size, _speed, _pos, _distance, _color, _angle, _desc, _name);
            this.orbits = _orbits;
        }

        move(_time: number, _orbit: Vector): void
        {
            super.move(_time, _orbit);
        }















    }
}