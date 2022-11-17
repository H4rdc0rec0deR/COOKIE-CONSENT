const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalTextEl = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("reverse");
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(consentForm);
  const name = formData.get("fullName");

  modalTextEl.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
      Uploading your data to the dark web...
    </p>
  </div>`;
  setTimeout(function () {
    document.getElementById("uploadText").innerText = `
    Making the sale...`;
  }, 2000);
  setTimeout(function () {
    document.getElementById("modal-close-btn").disabled = false;
    document.getElementById("modal-inner").innerHTML = `
    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
      <img src="images/pirate.gif">
    </div>
  `;
  }, 4000);
});
