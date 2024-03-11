document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('mensaje').style.display = 'block';
  createPetals();
});
function createPetals() {
  const petalsContainer = document.getElementById('petals');
  for (let i = 0; i < 12; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.transform = `rotate(${i * 30}deg)`;
    petalsContainer.appendChild(petal);
  }
}



