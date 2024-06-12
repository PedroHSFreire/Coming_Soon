let itemValue = "";
document.getElementById("list").addEventListener("click", function (e) {
  itemValue = e.target.value;
});
let teste = document.querySelectorAll(".teste");
teste.forEach((elemento) => {
  elemento.addEventListener("click", () => {
    teste.forEach(removerToggle);
    elemento.classList.toggle("versetroca");
  });
});
function removerToggle(filho) {
  filho.classList.remove("versetroca");
}
function handleSubmit() {
  if (itemValue) {
    const pills = document.getElementById("pills");
    const ratingSection = document.getElementById("rating-section");
    const appreciationSection = document.getElementById("apperciation-section");
    pills.innerText = `You selected ${itemValue} out of 5`;
    ratingSection.style.display = "none";
    appreciationSection.style.display = "grid";
  }
}
