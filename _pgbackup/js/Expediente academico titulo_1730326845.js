//titulo
function togglePopupt() {
  const overlayt = document.getElementById("popupOverlayt");
  overlayt.classList.toggle("show");

  if (overlayt.classList.contains("show")) {
    const btnSubmitt = document.getElementById("btn-submitt");
    btnSubmitt.addEventListener("click", handleButtonClickt);
  }
}

function handleButtonClickt(eventt) {
  eventt.preventDefault();
  togglePopupt();
  const checkbox = document.getElementById("check_titulo");
  checkbox.checked = true;
  document
    .getElementById("btn-submitt")
    .addEventListener("click", handleButtonClickt);
}

var ti = document.getElementById("btn-closet");
ti &&
  ti.addEventListener("click", function () {
    const btnSubmitt = document.getElementById("btn-submitt");
    btnSubmitt.removeEventListener("click", handleButtonClickt);
  });
