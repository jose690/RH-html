//institucion
function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");

  if (overlay.classList.contains("show")) {
    const btnSubmit = document.getElementById("btn-submit");
    btnSubmit.addEventListener("click", handleButtonClick);
  }
}

function handleButtonClick(event) {
  event.preventDefault();
  const selectedOption = document.getElementById("select_institucion").value;
  document.getElementById("texto_institucion").textContent = selectedOption;
  togglePopup();
}

var ins = document.getElementById("btn-close");
ins &&
  ins.addEventListener("click", function () {
    const btnSubmit = document.getElementById("btn-submit");
    btnSubmit.removeEventListener("click", handleButtonClick);
  });
