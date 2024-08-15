document.addEventListener("DOMContentLoaded", function() {
    function handleVote(event) {
        event.preventDefault(); // Evita que el formulario se envíe y la página se recargue

        const section = document.getElementById("section").value;
        const result = document.getElementById("result");

        switch(section) {
            case "norte":
                result.textContent = "¡Gracias por votar! Sección Norte seleccionada.";
                break;
            case "sur":
                result.textContent = "¡Gracias por votar! Sección Sur seleccionada.";
                break;
            case "centro":
                result.textContent = "¡Gracias por votar! Sección Centro seleccionada.";
                break;
            default:
                result.textContent = "Por favor, selecciona una sección válida.";
                break;
        }

        result.classList.add("visible"); // Asegúrate de que el resultado sea visible
    }

    const form = document.getElementById("votingForm");
    form.addEventListener("submit", handleVote);
});
