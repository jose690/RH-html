//idiomas
function togglePopupi() {
    const overlay = document.getElementById("popupOverlayi");
    overlay.classList.toggle("show");

    if (overlay.classList.contains("show")) {
        const btnSubmit = document.getElementById("btn-submiti");
        btnSubmit.addEventListener("click", handleButtonClicki);
    }
}

function handleButtonClicki(event) {
    event.preventDefault();
    const checkboxes = document.querySelectorAll("#popupOverlayi input[type='checkbox']");
    const selectedOptions = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox =>checkbox.id);
    document.getElementById("texto_idioma").textContent = selectedOptions.join(", ");
    togglePopupi();
}

document.getElementById("btn-submiti").addEventListener("click", handleButtonClicki);

//verificar
function togglePopupv() {
    const overlay = document.getElementById("popupOverlayv");
    const btnSubmit = document.getElementById("btn-submitv");

    // Alterna la visibilidad del popup
    overlay.classList.toggle("show");

    if (overlay.classList.contains("show")) {
        // Agregar el evento al botón de submit solo cuando el popup esté visible
        btnSubmit.addEventListener("click", handleButtonClickv);
    } else {
        // Remueve el evento para evitar que se acumulen listeners
        btnSubmit.removeEventListener("click", handleButtonClickv);
    }
}

function handleButtonClickv(event) {
    event.preventDefault();

    // Cierra el popup
    togglePopupv();
}

// Agregar evento para abrir/cerrar el popup
document.getElementById("btn-open-popup").addEventListener("click", togglePopupv);
