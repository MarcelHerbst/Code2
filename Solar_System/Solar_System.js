"use strict";
var Solar_System;
(function (Solar_System) {
    window.addEventListener("load", handleLoad);
    let time = 0;
    const planets = [
        new Solar_System.Planet([], 0.24, 0.0479, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(20, 0, 0), new Solar_System.Vector(255, 0, 255), 0, "This is a planet!", "Mercury", false, []),
        new Solar_System.Planet([], 0.6, 0.0350, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(40, 0, 0), new Solar_System.Vector(205, 0, 255), 0, "This is a planet!", "Venus", false, []),
        new Solar_System.Planet([], 0.63, 0.0298, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(70, 0, 0), new Solar_System.Vector(55, 100, 255), 0, "This is a planet!", "Earth", false, [
            new Solar_System.Moon([], 0.3, 0.9, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(5, 0, 0), new Solar_System.Vector(225, 225, 225), 0, "This is a moon!", "Moon", "Earth")
        ]),
        new Solar_System.Planet([], 0.33, 0.0241, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(100, 0, 0), new Solar_System.Vector(255, 0, 55), 0, "This is a planet!", "Mars", false, [
            new Solar_System.Moon([], 0.1, 0.5, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(2, 0, 0), new Solar_System.Vector(225, 225, 225), 0, "This is a moon!", "Moon", "Mars"),
            new Solar_System.Moon([], 0.1, 0.7, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(3, 0, 0), new Solar_System.Vector(225, 225, 225), 0, "This is a moon!", "Moon", "Mars")
        ]),
        new Solar_System.Planet([], 1.9, 0.0131, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(150, 0, 0), new Solar_System.Vector(25, 25, 255), 0, "This is a planet!", "Jupiter", false, []),
        new Solar_System.Planet([], 1.8, 0.0097, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(200, 0, 0), new Solar_System.Vector(25, 190, 25), 0, "This is a planet!", "Saturn", false, [
        // There's probably a smart way to add 146 Moons to an array.
        ]),
        new Solar_System.Planet([], 0.9, 0.0068, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(250, 0, 0), new Solar_System.Vector(105, 25, 255), 0, "This is a planet!", "Uranus", false, []),
        new Solar_System.Planet([], 0.85, 0.0054, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(300, 0, 0), new Solar_System.Vector(0, 0, 255), 0, "This is a planet!", "Neptune", false, [])
    ];
    const bodies = [
        new Solar_System.Body([], 1, 0, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(255, 255, 0), 0, "This is the sun!", "Sun")
    ];
    function handleLoad(_event) {
        console.log("handleLoad");
        const slider = document.querySelector("#slider");
        const canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Solar_System.crc2 = canvas.getContext("2d");
        Solar_System.crc2.canvas.width = window.innerWidth;
        Solar_System.crc2.canvas.height = window.innerHeight;
        Solar_System.crc2.fillStyle = "black";
        Solar_System.crc2.fillRect(0, 0, Solar_System.crc2.canvas.width, Solar_System.crc2.canvas.height);
        Solar_System.crc2.translate(Solar_System.crc2.canvas.width / 2, Solar_System.crc2.canvas.height / 2);
        // Create Sun
        // bodies.push(new Body(bodies, 3, 0, new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(255, 255, 0), "This is the sun!", "Sun"));
        // // Create Planets
        // bodies.push(new Planet(bodies, 0.3, 0.05, new Vector(0, 0, 0), new Vector(60, 5, 0), new Vector(255, 0, 255), "This is a planet!", "Mercury", false, []));
        // bodies.push(new Planet(bodies, 0.4, 0.04, new Vector(0, 0, 0), new Vector(100, 0, 0), new Vector(205, 0, 255), "This is a planet!", "Venus", false, []));
        // bodies.push(new Planet(bodies, 0.5, 0.03, new Vector(0, 0, 0), new Vector(140, 0, 0), new Vector(55, 100, 255), "This is a planet!", "Earth", false, []));
        // bodies.push(new Planet(bodies, 0.4, 0.02, new Vector(0, 0, 0), new Vector(200, 0, 0), new Vector(255, 0, 55), "This is a planet!", "Mars", false, []));
        // bodies.push(new Planet(bodies, 0.9, 0.01, new Vector(0, 0, 0), new Vector(260, 0, 0), new Vector(25, 25, 255), "This is a planet!", "Jupiter", false, []));
        // bodies.push(new Planet(bodies, 1, 0.01, new Vector(0, 0, 0), new Vector(320, 0, 0), new Vector(25, 190, 25), "This is a planet!", "Saturn", false, []));
        // bodies.push(new Planet(bodies, 1.2, 0.003, new Vector(0, 0, 0), new Vector(380, 0, 0), new Vector(105, 25, 255), "This is a planet!", "Uranus", false, []));
        // bodies.push(new Planet(bodies, 0.6, 0.001, new Vector(0, 0, 0), new Vector(440, 0, 0), new Vector(0, 0, 255), "This is a planet!", "Neptune", false, []));
        // // Create Moons
        // bodies.push(new Moon(bodies, 0.4, 0.05, new Vector(0, 0, 0), new Vector(50, 5, 0), new Vector(225, 225, 225), "This is a moon!", "Moon", "Earth"));
        canvas.addEventListener("click", showDesc);
        slider.addEventListener("input", changeTime);
        window.setInterval(update, 33);
    }
    function changeTime(_event) {
        console.log("changeTime");
        const slider = _event.target;
        const value = Number(slider.value); // 0 - 100
        time = value;
        console.log(value);
    }
    function showDesc() {
        console.log("showDesc");
        // delete previous div element
        const htmlBody = document.querySelector("body");
        const descBox = document.createElement("div");
        descBox.id = "desc";
        htmlBody.appendChild(descBox);
        // document.querySelector("#desc")!.innerHTML = `${bodies[i].desc}`.
    }
    function update() {
        // console.log("Update");
        Solar_System.crc2.translate(-Solar_System.crc2.canvas.width / 2, -Solar_System.crc2.canvas.height / 2);
        Solar_System.crc2.fillRect(0, 0, Solar_System.crc2.canvas.width, Solar_System.crc2.canvas.height); // Clear Canvas
        Solar_System.crc2.translate(Solar_System.crc2.canvas.width / 2, Solar_System.crc2.canvas.height / 2);
        for (const planet of planets) {
            planet.move(time, bodies[0].pos);
            planet.draw();
        }
        for (const body of bodies) {
            body.draw();
        }
    }
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Solar_System.js.map