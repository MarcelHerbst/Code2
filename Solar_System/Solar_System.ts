namespace Solar_System
{

    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad);
    const bodies: Body[] = [];

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
        crc2.strokeStyle = "white";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


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



    function changeTime(_event: Event): void
    {
        console.log("changeTime");
        const slider: HTMLInputElement = <HTMLInputElement>_event.target;
        const value: number = Number(slider.value);
        console.log(value);
    }

    function showDesc(): void
    {
        console.log("showDesc");
        const htmlBody: HTMLElement | null = document.querySelector("body")!;
        const descBox: HTMLDivElement = <HTMLDivElement>document.createElement("div");
        descBox.id = "desc";
        htmlBody.appendChild(descBox);
        // document.querySelector("#desc")!.innerHTML = `${bodies[i].desc}`.
    }

    function update(): void
    {
        console.log("Update");
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height); // Clear Canvas

        for (const body of bodies)
        {
            // body.move(1 / 50);
            // body.draw();
        }
    }























}