// Photo Slider
let slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}
setInterval(nextSlide, 4000);

// Love Quotes
const quotes = [
  "You are my sunshine 💖",
  "Forever and always 💕",
  "My heart belongs to you ❤️",
  "You make my life magical ✨",
  "Every moment with you is precious 💝"
];
let qIndex = 0;
const quoteEl = document.getElementById('quote');
setInterval(() => {
  qIndex = (qIndex + 1) % quotes.length;
  quoteEl.textContent = quotes[qIndex];
}, 5000);

// Floating Hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.width = Math.random() * 25 + 10 + 'px';
  heart.style.height = heart.style.width;
  heart.style.animationDuration = (3 + Math.random()*2) + 's';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 400);
