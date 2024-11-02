"use strict";
var Solar_System;
(function (Solar_System) {
    window.addEventListener("load", handleLoad);
    const bodies = [];
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
        Solar_System.crc2.strokeStyle = "white";
        Solar_System.crc2.fillRect(0, 0, Solar_System.crc2.canvas.width, Solar_System.crc2.canvas.height);
        // Create Sun
        // bodies.push(new Body());
        // Create Planets
        // bodies.push(new Planet());
        // Create Moons
        // bodies.push(new Moon());
        canvas.addEventListener("click", showDesc);
        slider.addEventListener("input", changeTime);
        window.setInterval(update, 30);
    }
    function changeTime(_event) {
        console.log("changeTime");
        const slider = _event.target;
        const value = Number(slider.value);
        console.log(value);
    }
    function showDesc() {
        console.log("showDesc");
        const htmlBody = document.querySelector("body");
        const descBox = document.createElement("div");
        descBox.id = "desc";
        htmlBody.appendChild(descBox);
        // document.querySelector("#desc")!.innerHTML = `${bodies[i].desc}`.
    }
    function update() {
        console.log("Update");
        Solar_System.crc2.fillRect(0, 0, Solar_System.crc2.canvas.width, Solar_System.crc2.canvas.height); // Clear Canvas
        for (const body of bodies) {
            // body.move(1 / 50);
            // body.draw();
        }
    }
})(Solar_System || (Solar_System = {}));
//# sourceMappingURL=Solar_System.js.map