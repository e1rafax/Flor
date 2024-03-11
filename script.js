document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('mensaje').style.display = 'block';
  createPetals();
});

function createPetals() {
  const girasol = document.getElementById('girasol');
  for (let i = 0; i < 12; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.transform = `rotate(${i * 30}deg) translate(-50%, -100%)`;
    girasol.appendChild(petal);
  }
}


