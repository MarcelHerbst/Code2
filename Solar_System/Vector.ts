namespace Solar_System {

    export class Vector {
        x: number;
        y: number;
        z: number;

        constructor(_x: number, _y: number, _z: number) {
            this.set(_x, _y, _z)
        }

        public set(_x: number, _y: number, _z:number): void {
            this.x = _x
            this.y = _y
            this.z = _z
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_min: number, _max: number): void {
            const length: number = _min + Math.random() * (_max - _min);
            const dir: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(dir), Math.sin(dir), Math.tan(dir));
            this.scale(length);
        }

        copy(): Vector {
            return new Vector(this.x, this.y, this.z);
        }

        mag(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
}