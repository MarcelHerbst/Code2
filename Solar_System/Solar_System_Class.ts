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
        public desc?: string;
        public name?: string;

        constructor(_planets: Body[], _size: number, _speed: number, _pos: Vector, _distance: Vector, _color: Vector, _desc?: string, _name?: string)
        {

            this.planets = [];
            this.size = _size;
            this.speed = _speed;
            this.pos = _pos;
            this.distance = _distance;
            this.color = _color;
            this.desc = _desc;
            this.name = _name;
        }

        move(_time: number): void
        {
            crc2.rotate((this.speed * _time * Math.PI) / 180);
            // crc2.translate(this.distance.x, this.distance.y);
            
        }

        draw(): void
        {
            console.log("Body Draw")
            const bodyPath: Path2D = new Path2D();
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.rotate((this.speed * Math.PI) / 180);
            crc2.translate(this.distance.x, this.distance.y);
            bodyPath.ellipse(0, 0, 10 * this.size, 10 * this.size, 0, 0, Math.PI * 2);
            crc2.fillStyle = `rgb(${this.color.x}, ${this.color.y}, ${this.color.z})`;
            crc2.strokeStyle = `rgb(${this.color.x}, ${this.color.y}, ${this.color.z})`;
            crc2.fill(bodyPath);
            crc2.restore();
        }
    }

    export class Planet extends Body
    {
        public hasRing: boolean;
        public moons: Body[];

        constructor(_planets: Body[], _size: number, _speed: number, _pos: Vector, _distance: Vector, _color: Vector, _desc: string, _name: string, _hasRing: boolean, _moons: Body[])
        {
            super(_planets, _size, _speed, _pos, _distance, _color, _desc, _name);
            this.hasRing = _hasRing;
            this.moons = _moons;
        }

        move(_time: number): void{
            super.move(_time);
        }
    }



    export class Moon extends Body
    {
        public orbits: string;

        constructor(_planets: Body[], _size: number, _speed: number, _pos: Vector, _distance: Vector, _color: Vector, _desc: string, _name: string, _orbits: string)
        {
            super(_planets, _size, _speed, _pos, _distance, _color, _desc, _name);
            this.orbits = _orbits;
        }

        move(_time: number): void{
            super.move(_time);
            crc2.translate(this.distance.x, this.distance.y);
            crc2.rotate((this.speed * Math.PI) / 180);
        }















    }
}