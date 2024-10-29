"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    const animals = [];
    const foods = [];
    function createAnimals() {
        const cow = new OldMacDonaldsFarm.Animal("Hella", "cow", "Muuuhhh", "grass", 3);
        const horse = new OldMacDonaldsFarm.Animal("Ponny", "horse", "prrrrrr", "apple", 4);
        const pig = new OldMacDonaldsFarm.Animal("Peppa", "pig", "grunz grunz", "hay", 6);
        const chicken = new OldMacDonaldsFarm.Animal("Kerstin", "chicken", "kickeriki", "corn", 9);
        const dog = new OldMacDonaldsFarm.Animal("Ben", "dog", "Wuff Wuff", "meat", 2);
        animals.push(cow, horse, pig, chicken, dog);
    }
    OldMacDonaldsFarm.createAnimals = createAnimals;
    function createFood() {
        const hay = new OldMacDonaldsFarm.Food("hay", 35);
        const apple = new OldMacDonaldsFarm.Food("apple", 25);
        const grass = new OldMacDonaldsFarm.Food("grass", 65);
        const corn = new OldMacDonaldsFarm.Food("corn", 78);
        const meat = new OldMacDonaldsFarm.Food("meat", 24);
        foods.push(hay, apple, grass, corn, meat);
    }
    OldMacDonaldsFarm.createFood = createFood;
    function simulate() {
        for (let day = 1; day <= 10; day++) {
            for (const animal of animals) {
                for (const food of foods) {
                    if (animal.food == food.type) {
                        if (animal.foodcount < food.count) {
                            console.log(day + " day " + "\n" + "\n" + "Old Mc Donalds had a Farm" + "\n" + "E-I-E-I-O" + "\n" + "and on his farm he had a " + animal.type + "\n" + "E-I-E-I-O" + "\n" + "the name of the " + animal.type + " is " + animal.name + "\n" + "E-I-E-I-O" + "\n" + animal.name + " eat " + animal.food + " and ");
                            animal.sing();
                            food.count -= animal.foodcount;
                        }
                        else {
                            console.warn(food.count + " " + food.type + " is empty");
                        }
                        break;
                    }
                }
            }
        }
    }
    OldMacDonaldsFarm.simulate = simulate;
    createAnimals();
    createFood();
    simulate();
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=OldMcDonaldsFarm.js.map