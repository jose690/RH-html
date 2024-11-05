//titulo
function togglePopupt() {
  const overlay = document.getElementById("popupOverlayt");
  overlay.classList.toggle("show");

  if (overlay.classList.contains("show")) {
    const btnSubmit = document.getElementById("btn-submitt");
    btnSubmit.addEventListener("click", handleButtonClickt);
  }
}

function handleButtonClickt(event) {
  event.preventDefault();
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
    const btnSubmit = document.getElementById("btn-submitt");
    btnSubmit.removeEventListener("click", handleButtonClickt);
  });

//mostrar
function togglePopuptm() {
  const overlay = document.getElementById("popupOverlaytm");
  overlay.classList.toggle("show");

  if (overlay.classList.contains("show")) {
    const btnSubmit = document.getElementById("btn-submittm");
    btnSubmit.addEventListener("click", handleButtonClicktm);
  }
}

function handleButtonClicktm(event) {
  event.preventDefault();
  togglePopuptm();
}

var tim = document.getElementById("btn-closetm");
tim &&
  tim.addEventListener("click", function () {
    const btnSubmit = document.getElementById("btn-submittm");
    btnSubmit.removeEventListener("click", handleButtonClicktm);
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

//agregar titulo
function togglePopupaddtittle() {
  const overlay = document.getElementById("popupOverlayaddtittle");
  overlay.classList.toggle("show");

  if (overlay.classList.contains("show")) {
    const btnSubmit = document.getElementById("btn-submitaddtittle");
    btnSubmit.addEventListener("click", handleButtonClickaddtittle);
  }
}

function handleButtonClickaddtittle(event) {
  event.preventDefault();
  togglePopupaddtittle();
}

var ins = document.getElementById("btn-close");
ins &&
  ins.addEventListener("click", function () {
    const btnSubmit = document.getElementById("btn-submitaddtitle");
    btnSubmit.removeEventListener("click", handleButtonClickaddtitle);
  });
