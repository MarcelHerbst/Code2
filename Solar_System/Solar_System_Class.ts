namespace Solar_System{

export class Body {
    public planets: Body[];
    public size: number;
    public speed: Vektor;
    public pos: Vektor;
    public color: Vektor;
    public desc?: string; 
    public name?: string;

    constructor(_planets: Body[], _size:number, _speed: Vektor, _pos: Vektor, _color: Vektor, _desc: string, _name: string){
   
    this.planets = [];
    this.size = _size;
    this.speed = _speed;
    this.pos = _pos;
    this.color = _color;
    this.desc = _desc;
    this.name = _name;
}
}

export class Planet{
    
}



export class Moon{

}















}