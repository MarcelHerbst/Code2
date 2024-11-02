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
        bodies.push(new Solar_System.Planet(bodies, 1, 0.01, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(100, 5, 0), new Solar_System.Vector(255, 0, 255), "This is a planet!", "Planet A", false, []));
        // Create Moons
        bodies.push(new Solar_System.Moon(bodies, 0.4, 0.05, new Solar_System.Vector(0, 0, 0), new Solar_System.Vector(50, 5, 0), new Solar_System.Vector(0, 0, 255), "This is a planet!", "Planet A", "Planet A"));
        canvas.addEventListener("click", showDesc);
        slider.addEventListener("input", changeTime);
        window.setInterval(update, 1);
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
        Solar_System.crc2.fillStyle = "black";
        for (const body of bodies) {
            if (body instanceof Solar_System.Planet) {
                body.move(time);
            }
            body.draw();
        }
    }
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Solar_System.js.map