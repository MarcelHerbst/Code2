namespace Solar_System{

export class Body {
    public planets: Body[];
    public size: number;
    public speed: number;
    public pos: Vektor;
    public color: Vektor;
    public desc?: string; 
    public name?: string;

    constructor(_planets: Body[], _size:number, _speed: number, _pos: Vektor, _color: Vektor, _desc: string, _name: string){
   
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
    public hasRing : boolean;
    public moons : Body[];

    constructor(_planets: Body[], _size:number, _speed:number, _pos: Vektor, _color:Vektor, _desc: string, _name: string, _hasRing: boolean, _moons: Body[]){
        super(_planets, _size, _speed, _pos, _color, _desc, _name)
        this.hasRing = _hasRing;
        this.moons = _moons;
        
    }

}

export class Moon extends Body{
    public orbits: string;

    constructor(_planets: Body[], _size: number, _speed: number, _pos: Vektor, _color: Vektor, _desc: string, _name: string, _orbits: string){
        super(_planets, _size, _speed, _pos, _color, _desc, _name)
        this.orbits = _orbits;
    }

}















}