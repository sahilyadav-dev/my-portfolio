emailjs.init("ZTGwUPapNnDhA1naL");

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_7llmtkz", "template_3p2ofom", this).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message: " + error.text);
      }
    );
  });

const sidebar = document.querySelector(".responsive-nav");
const closeButton = document.querySelector(".js-close-button");
const menuButton = document.querySelector(".js-menu-button");

function showSidebar() {
  sidebar.style.display = "flex";
  closeButton.style.display = "block";
  menuButton.style.display = "none";
}
function hideSidebar() {
  sidebar.style.display = "none";
  closeButton.style.display = "none";
  menuButton.style.display = "block";
}

sidebar.addEventListener("click", () => {
  hideSidebar();
});
