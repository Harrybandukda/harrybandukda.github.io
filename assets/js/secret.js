const particles = document.getElementById('particles');
const startBtn = document.getElementById('start-btn');
const initialContent = document.getElementById('initial-content');
const challengeContent = document.getElementById('challenge-content');
const mainText = document.getElementById('main-text');
const glitchText = document.getElementById('glitch-text');
const cursor = document.getElementById('custom-cursor');
const morseAudio = new Audio('assets/sounds/morse.wav');

const fullText = "Not all that is seen is what it seems. Dig deeper, between the lines, where the real secrets are often written. The code awaits those who dare to look beyond the obvious.";
let currentText = "";

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 12 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 4 + 3}s`;
    particles.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 4000);
}

function animateParticles() {
    setInterval(createParticle, 30);
}

function typeText() {
    if (currentText.length < fullText.length) {
        currentText = fullText.slice(0, currentText.length + 1);
        mainText.textContent = currentText;
        glitchText.textContent = currentText.split('').map(char => 
            Math.random() > 0.9 ? String.fromCharCode(Math.floor(Math.random() * 26) + 97) : char
        ).join('');
        setTimeout(typeText, 35);
    }
}

function glitchEffect() {
    if (currentText.length === fullText.length) {
        glitchText.textContent = currentText.split('').map(char => 
            Math.random() > 0.9 ? String.fromCharCode(Math.floor(Math.random() * 26) + 97) : char
        ).join('');
        setTimeout(glitchEffect, 100);
    }
}

startBtn.addEventListener('click', () => {
    initialContent.style.display = 'none';
    challengeContent.style.display = 'block';
    typeText();
    setTimeout(glitchEffect, fullText.length * 50);
    morseAudio.play();
});

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

animateParticles();

console.log("%c30 lives could turn the tide. Only those who remember the right moves will find the way.", "color: #00ffff; font-size: 20px; font-weight: bold;");

let konami = '';
const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
document.addEventListener('keyup', (e) => {
    konami += e.key;
    if (konamiCode.indexOf(konami) !== 0) {
        konami = '';
    } else if (konami === konamiCode) {
        alert('-. --- ... -.-- - .-.. .. . -. .-.-.- ..- ... .-.-.- - ---');
        konami = '';
    }
});