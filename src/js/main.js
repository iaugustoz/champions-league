// Lógica para mostrar/ocultar o texto da seção "WELCOME"
const hiddenText = document.getElementById("text");
const buttonHiddenText = document.getElementById("btnHiddenText");

buttonHiddenText.addEventListener("click", function () {
    hiddenText.classList.toggle("hidden");
});