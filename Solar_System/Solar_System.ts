namespace Solar_System
{

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);
    const bodies: Body[] = [];
    let time: number;

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
        bodies.push(new Body(bodies, 3, 0, new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(255, 255, 0), "This is the sun!", "Sun"));

        // Create Planets
        bodies.push(new Planet(bodies, 1, 0.01, new Vector(0, 0, 0), new Vector(100, 5, 0), new Vector(255, 0, 255), "This is a planet!", "Planet A", false, []));

        // Create Moons
        bodies.push(new Moon(bodies, 0.4, 0.05, new Vector(0, 0, 0), new Vector(50, 5, 0), new Vector(0, 0, 255), "This is a planet!", "Planet A", "Planet A"));


        canvas.addEventListener("click", showDesc);
        slider.addEventListener("input", changeTime);

        window.setInterval(update, 1);
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
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); // Clear Canvas
        crc2.fillStyle = "black";

        for (const body of bodies)
        {
            if (body instanceof Planet)
            {
                body.move(time);
            }

            body.draw();
        }
    }























}