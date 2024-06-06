let currentIndex = 0;
const cards = document.querySelectorAll('.cartao');
const totalCards = cards.length;

document.getElementById('btn-avancar').addEventListener('click', () => {
  cards[currentIndex].classList.remove('selecionado');
  currentIndex = (currentIndex + 1) % totalCards;
  cards[currentIndex].classList.add('selecionado');
  updateCarousel();
});

document.getElementById('btn-voltar').addEventListener('click', () => {
  cards[currentIndex].classList.remove('selecionado');
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  cards[currentIndex].classList.add('selecionado');
  updateCarousel();
});

function updateCarousel() {
  cards.forEach((card, index) => {
    card.style.display = index === currentIndex ? 'flex' : 'none';
  });
}

updateCarousel();