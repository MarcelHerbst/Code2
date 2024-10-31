namespace OldMacDonaldsFarm {
    export class Animal {
        public name: string;
        public type: string;
        public sound: string;
        public food: string;
        public foodcount: number;

        constructor(_name: string, _type: string, _sound: string, _food: string, _foodcount: number) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.foodcount = _foodcount;
        }

        sing(): void {
            console.log(this.name + " sing " + this.sound);
        }
    }

}