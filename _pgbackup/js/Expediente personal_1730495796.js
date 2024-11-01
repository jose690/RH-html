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
  const checkboxes = document.querySelectorAll("#popupOverlayi input[type='checkbox']").value;
  document.getElementById("texto_idioma").textContent = selectedOption;
  togglePopupi();
}

var lan = document.getElementById("btn-close");
lan &&
  lan.addEventListener("click", function () {
    const btnSubmit = document.getElementById("btn-submiti");
    btnSubmit.removeEventListener("click", handleButtonClicki);
  });
