document.addEventListener("DOMContentLoaded", function() {
    let numberOfBoxes = prompt("¿Cuántas cajas deseas colocar?");
    numberOfBoxes = parseInt(numberOfBoxes);

    const container = document.getElementById("boxContainer");

    if (isNaN(numberOfBoxes) || numberOfBoxes <= 0) {
        alert("Por favor, ingresa un número válido.");
    } else {
        if (numberOfBoxes < 8) {
            container.style.flexDirection = "column";
            for (let i = 0; i < numberOfBoxes; i++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.textContent = `Caja ${i + 1}`;
                container.appendChild(box);
            }
        } else {
            container.style.flexDirection = "row";
            container.classList.add("horizontal");
            for (let i = 0; i < numberOfBoxes; i++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.textContent = `Caja ${i + 1}`;
                container.appendChild(box);
            }
        }
    }
});