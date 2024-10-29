"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    class Animal {
        constructor(_name, _type, _sound, _food, _foodcount) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            this.food = _food;
            this.foodcount = _foodcount;
        }
        sing() {
            console.log(this.name + " sing " + this.sound);
        }
    }
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animals.js.map