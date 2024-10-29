namespace OldMacDonaldsFarm {

    const animals: Animal[] = [];
    const foods: Food[] = [];

    export function createAnimals(): void {
        const cow: Animal = new Animal("Hella", "cow", "Muuuhhh", "grass", 3);
        const horse: Animal = new Animal("Ponny", "horse", "prrrrrr", "apple", 4);
        const pig: Animal = new Animal("Peppa", "pig", "grunz grunz", "hay", 6);
        const chicken: Animal = new Animal("Kerstin", "chicken", "kickeriki", "corn", 9);
        const dog: Animal = new Animal("Ben", "dog", "Wuff Wuff", "meat", 2);

        animals.push(cow, horse, pig, chicken, dog);
    }

    export function createFood(): void {
        const hay: Food = new Food("hay", 35)
        const apple: Food = new Food("apple", 25)
        const grass: Food = new Food("grass", 65)
        const corn: Food = new Food("corn", 78)
        const meat: Food = new Food("meat", 24)

        foods.push(hay, apple, grass, corn, meat);
    }

    export function simulate(): void {
        for (let day: number = 1; day <= 10; day++) {
            for (const animal of animals) {
                for (const food of foods) {
                    if (animal.food == food.type) {
                        if (animal.foodcount < food.count) {
                            console.log(day + " day " + "\n" + "\n" + "Old Mc Donalds had a Farm" + "\n" + "E-I-E-I-O" + "\n" + "and on his farm he had a " + animal.type + "\n" + "E-I-E-I-O" + "\n" + "the name of the " + animal.type + " is " + animal.name + "\n" + "E-I-E-I-O" + "\n" + animal.name + " eat " + animal.food + " and ");
                            animal.sing();
                            food.count -= animal.foodcount;
                        }
                        else
                        {
                            console.warn(food.count +" " + food.type + " is empty");
                        }
                        break;
                    }
                }
            }

        }
    }
    createAnimals();
    createFood();
    simulate();
}