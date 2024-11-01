//institucion
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
    .map(checkbox =>checkbox.value);
    document.getElementById("texto_idioma").textContent = selectedOptions.join(", ");
    togglePopupi();
}

document.getElementById("btn-submiti").addEventListener("click", handleButtonClicki);