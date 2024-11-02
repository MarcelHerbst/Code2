namespace Solar_System{

export class Body {
    public planets: Body[];
    public size: number;
    public speed: Vector;
    public pos: Vector;
    public color: Vector;
    public desc?: string; 
    public name?: string;

    constructor(_planets: Body[], _size:number, _speed: Vector, _pos: Vector, _color: Vector, _desc: string, _name: string){
   
    this.planets = [];
    this.size = _size;
    this.speed = _speed;
    this.pos = _pos;
    this.color = _color;
    this.desc = _desc;
    this.name = _name;
}
}

export class Planet extends Body{
    public hasRing: boolean;
    public moons: Body[];

    constructor(_planets: Body[], _size:number, _speed: Vector, _pos: Vector, _color: Vector, _desc: string, _name: string, _hasRing: boolean, _moons: Body[]){
        super(_planets, _size, _speed, _pos, _color, _desc, _name)
        this.hasRing = _hasRing;
        this.moons = _moons;
    }
}



export class Moon extends Body{

}















}