namespace Solar_System
{

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);
    let time: number = 0;

    
    const planets: Body[] = [
        new Planet([], 0.24, 0.0479, new Vector(0, 0, 0), new Vector(20, 0, 0), new Vector(255, 0, 255), 0, "This is a planet!", "Mercury", false, []),
        new Planet([], 0.6, 0.0350, new Vector(0, 0, 0), new Vector(40, 0, 0), new Vector(205, 0, 255), 0, "This is a planet!", "Venus", false, []),
        new Planet([], 0.63, 0.0298, new Vector(0, 0, 0), new Vector(70, 0, 0), new Vector(55, 100, 255), 0, "This is a planet!", "Earth", false,
            [
                new Moon([], 0.3, 0.9,  new Vector(0, 0, 0), new Vector(5, 0, 0), new Vector(225, 225, 225), 0, "This is a moon!", "Moon", "Earth")
            ]),
        new Planet([], 0.33, 0.0241, new Vector(0, 0, 0), new Vector(100, 0, 0), new Vector(255, 0, 55), 0, "This is a planet!", "Mars", false, []),
        new Planet([], 1.9, 0.0131, new Vector(0, 0, 0), new Vector(150, 0, 0), new Vector(25, 25, 255), 0, "This is a planet!", "Jupiter", false, []),
        new Planet([], 1.8, 0.0097, new Vector(0, 0, 0), new Vector(200, 0, 0), new Vector(25, 190, 25), 0, "This is a planet!", "Saturn", false, []),
        new Planet([], 0.9, 0.0068, new Vector(0, 0, 0), new Vector(250, 0, 0), new Vector(105, 25, 255), 0, "This is a planet!", "Uranus", false, []),
        new Planet([], 0.85, 0.0054, new Vector(0, 0, 0), new Vector(300, 0, 0), new Vector(0, 0, 255), 0, "This is a planet!", "Neptune", false, [])
    ];

    const bodies: Body[] =
        [
            new Body([], 1, 0, new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(255, 255, 0), 0, "This is the sun!", "Sun")
        ];



    function handleLoad(_event: Event): void
    {
        console.log("handleLoad");
        const slider: HTMLInputElement = document.querySelector("#slider")!;
        const canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.canvas.width = window.innerWidth;
        crc2.canvas.height = window.innerHeight;
        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.translate(crc2.canvas.width / 2, crc2.canvas.height / 2);

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



    function changeTime(_event: Event): void
    {
        console.log("changeTime");
        const slider: HTMLInputElement = <HTMLInputElement>_event.target;
        const value: number = Number(slider.value); // 0 - 100
        time = value;
        console.log(value);
    }

    function showDesc(): void
    {
        console.log("showDesc");
        // delete previous div element
        const htmlBody: HTMLElement | null = document.querySelector("body")!;
        const descBox: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        descBox.id = "desc";
        htmlBody.appendChild(descBox);
        // document.querySelector("#desc")!.innerHTML = `${bodies[i].desc}`.
    }

    function update(): void
    {
        // console.log("Update");
        crc2.translate(-crc2.canvas.width / 2, -crc2.canvas.height / 2);
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); // Clear Canvas
        crc2.translate(crc2.canvas.width / 2, crc2.canvas.height / 2);

        for (const planet of planets)
            {
                planet.move(time, bodies[0].pos);
                planet.draw();
            }

        for (const body of bodies)
        {
            body.draw();
        }
    }
}