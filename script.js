document.addEventListener("DOMContentLoaded", function() {
  createPetals();
  setTimeout(function() {
    document.getElementById('mensaje').style.opacity = '1';
  }, 5000); // Show message after 5 seconds
});

function createPetals() {
  const petalContainer = document.getElementById('petal-container');
  for (let i = 0; i < 10; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${i * 10}px`;
    petalContainer.appendChild(petal);
  }
}





