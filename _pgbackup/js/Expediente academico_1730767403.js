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





//mostrar
function togglePopuptm() {
  const overlaytm = document.getElementById("popupOverlaytm");
  overlaytm.classList.toggle("show");

  if (overlaytm.classList.contains("show")) {
    const btnSubmittm = document.getElementById("btn-submittm");
    btnSubmittm.addEventListener("click", handleButtonClicktm);
  }
}

function handleButtonClicktm(eventtm) {
  eventtm.preventDefault();
  togglePopuptm();
}

var tim = document.getElementById("btn-closetm");
tim &&
  tim.addEventListener("click", function () {
    const btnSubmittm = document.getElementById("btn-submittm");
    btnSubmittm.removeEventListener("click", handleButtonClicktm);
  });

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
