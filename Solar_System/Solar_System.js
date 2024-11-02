"use strict";
var Solar_System;
(function (Solar_System) {
    window.addEventListener("load", handleLoad);
    const bodies = [];
    let time;
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
        bodies.push(new Solar_System.Body(bodies, 3, 0, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(255, 255, 0), "This is the sun!", "Sun"));
        // Create Planets
        bodies.push(new Solar_System.Planet(bodies, 0.3, 0.05, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(60, 5, 0), new Solar_System.Vector(255, 0, 255), "This is a planet!", "Mercury", false, []));
        bodies.push(new Solar_System.Planet(bodies, 0.4, 0.04, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(100, 0, 0), new Solar_System.Vector(205, 0, 255), "This is a planet!", "Venus", false, []));
        bodies.push(new Solar_System.Planet(bodies, 0.5, 0.03, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(140, 0, 0), new Solar_System.Vector(55, 100, 255), "This is a planet!", "Earth", false, []));
        bodies.push(new Solar_System.Planet(bodies, 0.4, 0.02, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(200, 0, 0), new Solar_System.Vector(255, 0, 55), "This is a planet!", "Mars", false, []));
        bodies.push(new Solar_System.Planet(bodies, 0.9, 0.01, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(260, 0, 0), new Solar_System.Vector(25, 25, 255), "This is a planet!", "Jupiter", false, []));
        bodies.push(new Solar_System.Planet(bodies, 1, 0.01, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(320, 0, 0), new Solar_System.Vector(25, 190, 25), "This is a planet!", "Saturn", false, []));
        bodies.push(new Solar_System.Planet(bodies, 1.2, 0.003, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(380, 0, 0), new Solar_System.Vector(105, 25, 255), "This is a planet!", "Uranus", false, []));
        bodies.push(new Solar_System.Planet(bodies, 0.6, 0.001, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(440, 0, 0), new Solar_System.Vector(0, 0, 255), "This is a planet!", "Neptune", false, []));
        // Create Moons
        bodies.push(new Solar_System.Moon(bodies, 0.4, 0.05, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(50, 5, 0), new Solar_System.Vector(225, 225, 225), "This is a moon!", "Moon", "Earth"));
        canvas.addEventListener("click", showDesc);
        slider.addEventListener("input", changeTime);
        window.setInterval(update, 30);
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
        Solar_System.crc2.fillRect(0, 0, Solar_System.crc2.canvas.width, Solar_System.crc2.canvas.height); // Clear Canvas
        for (const body of bodies) {
            if (body instanceof Solar_System.Planet) {
                Solar_System.crc2.translate(0, 0);
                body.move(time);
            }
            body.draw();
        }
    }
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Solar_System.js.map