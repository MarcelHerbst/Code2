//namespace test{

//class Vector {
   // x: number;
   // y: number;

    //constructor(_x: number, _y: number) {
      //  this.set(_x, _y);
    //}

    //set(_x: number, _y: number): void {
       // this.x = _x;
     //   this.y = _y;
   // }
    //scale(_factor: number): void {
       // this.x *= _factor;
     //   this.y *= _factor;
   // }

    //add(_addend: Vector): void {
    //    this.x += _addend.x;
  //      this.y += _addend.y;
//    }

    
//}

//let v1: Vector = new Vector(10, -3);
//v1.scale(2);
//console.log(v1);


//}

abstract class Animal {
  name: string;
  animalType: string;
  foodType: string;
  foodAmount: number;
  sound: string;

  constructor(name: string, animalType: string, foodType: string, foodAmount: number, sound: string) {
    this.name = name;
    this.animalType = animalType;
    this.foodType = foodType;
    this.foodAmount = foodAmount;
    this.sound = sound;
  }

  abstract eat(foodStock: FoodStock): void;

  sing(): void {
    console.log(`\n--- ${this.animalType} ---`);
    console.log(`Old MacDonald had a farm, E-I-E-I-O!`);
    console.log(`And on his farm he had a ${this.animalType}, E-I-E-I-O!`);
    console.log(`With a ${this.sound} ${this.sound} here and a ${this.sound} ${this.sound} there,`);
    console.log(`Here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound} ${this.sound}.`);
  }
}

interface FoodStock {
  [foodType: string]: number;
}

class Cow extends Animal {
  constructor(name: string, foodAmount: number) {
    super(name, "Cow", "Grass", foodAmount, "Moo");
  }

  eat(foodStock: FoodStock): void {
    if (foodStock[this.foodType] >= this.foodAmount) {
      foodStock[this.foodType] -= this.foodAmount;
      console.log(`${this.name} hat ${this.foodAmount} ${this.foodType} gefressen.`);
    } else {
      console.log(`${this.name} konnte nicht genug ${this.foodType} finden.`);
    }
  }
}

class Horse extends Animal {
  constructor(name: string, foodAmount: number) {
    super(name, "Horse", "Grains", foodAmount, "Neigh");
  }

  eat(foodStock: FoodStock): void {
    if (foodStock[this.foodType] >= this.foodAmount) {
      foodStock[this.foodType] -= this.foodAmount;
      console.log(`${this.name} hat ${this.foodAmount} ${this.foodType} gefressen.`);
    } else {
      console.log(`${this.name} konnte nicht genug ${this.foodType} finden.`);
    }
  }
}

class Dog extends Animal {
  constructor(name: string, foodAmount: number) {
    super(name, "Dog", "Meat", foodAmount, "Woof");
  }

  eat(foodStock: FoodStock): void {
    if (foodStock[this.foodType] >= this.foodAmount) {
      foodStock[this.foodType] -= this.foodAmount;
      console.log(`${this.name} hat ${this.foodAmount} ${this.foodType} gefressen.`);
    } else {
      console.log(`${this.name} konnte nicht genug ${this.foodType} finden.`);
    }
  }
}

class Chicken extends Animal {
  constructor(name: string, foodAmount: number) {
    super(name, "Chicken", "Grains", foodAmount, "Gack");
  }

  eat(foodStock: FoodStock): void {
    if (foodStock[this.foodType] >= this.foodAmount) {
      foodStock[this.foodType] -= this.foodAmount;
      console.log(`${this.name} hat ${this.foodAmount} ${this.foodType} gefressen.`);
    } else {
      console.log(`${this.name} konnte nicht genug ${this.foodType} finden.`);
    }
  }
}

class Pig extends Animal {
  constructor(name: string, foodAmount: number) {
    super(name, "Pig", "Junk", foodAmount, "Oink");
  }

  eat(foodStock: FoodStock): void {
    if (foodStock[this.foodType] >= this.foodAmount) {
      foodStock[this.foodType] -= this.foodAmount;
      console.log(`${this.name} hat ${this.foodAmount} ${this.foodType} gefressen.`);
    } else {
      console.log(`${this.name} konnte nicht genug ${this.foodType} finden.`);
    }
  }
}

const animals: Animal[] = [
  new Cow("Daisy", 10),
  new Horse("Rocky", 5),
  new Dog("Barnaby", 2),
  new Chicken("Clucky", 1),
  new Pig("Wilbur", 3),
];

const foodStock: FoodStock = {
  Grass: 20,
  Grains: 15,
  Meat: 5,
  Junk: 8,
};

for (const animal of animals) {
  animal.sing();
  animal.eat(foodStock);
}

console.log("\nVerbleibende Futtervorräte:");
for (const [foodType, amount] of Object.entries(foodStock)) {
  console.log(`${foodType}: ${amount}`);
}

for (const [foodType, amount] of Object.entries(foodStock)) {
  if (amount < 5) {
    console.log(`Nachbestellung für ${foodType} erforderlich!`);
  }
}