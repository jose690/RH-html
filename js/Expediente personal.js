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
    overlay.classList.toggle("show");

    if (overlay.classList.contains("show")) {
        const btnSubmit = document.getElementById("btn-submitv");
        btnSubmit.addEventListener("click", handleButtonClickv);
    }
}

function handleButtonClickv(event) {
    event.preventDefault();
    togglePopupv();
    togglePopupn();
}

document.getElementById("btn-submitv").addEventListener("click", handleButtonClickv);

//nuevos datos
function togglePopupn(){
    const overlay = document.getElementById("popupOverlayn");
    overlay.classList.toggle("show");

    if (overlay.classList.contains("show")) {
        const btnSubmit = document.getElementById("btn-submitn");
        btnSubmit.addEventListener("click", handleButtonClickn);
    }
}

function handleButtonClickn(event) {
    event.preventDefault();
    togglePopupn();
}

document.getElementById("btn-submitn").addEventListener("click",handleButtonClickn);

//colegiado
function togglePopupc(){
    const overlay = document.getElementById("popupOverlayc");
    overlay.classList.toggle("show");

    if (overlay.classList.contains("show")) {
        const btnSubmit = document.getElementById("btn-submitc");
        btnSubmit.addEventListener("click", handleButtonClickc);
    }
}

function handleButtonClickc(event) {
    event.preventDefault();
    togglePopupc();
}

document.getElementById("btn-submitc").addEventListener("click",handleButtonClickc);