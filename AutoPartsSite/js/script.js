// ========== СЛАЙДЕР ==========
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlideIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlideIndex);
    });
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

// Автоматическое переключение слайдов
setInterval(() => {
    changeSlide(1);
}, 5000);

// ========== ФОРМА ==========
const form = document.getElementById('contact-form');
const statusDiv = document.getElementById('form-status');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        statusDiv.textContent = 'Отправка...';
        statusDiv.style.color = '#ff6b6b';

        const formData = new FormData(form);
        const data = {
            name: formData.get('Name'),
            email: formData.get('Email'),
            phone: formData.get('Phone'),
            car: formData.get('Car'),
            message: formData.get('Message'),
            date: new Date().toLocaleString()
        };

        console.log('Заявка отправлена:', data);

        statusDiv.textContent = '✅ Спасибо! Ваша заявка принята. Мы свяжемся с вами.';
        statusDiv.style.color = '#4caf50';
        form.reset();

        setTimeout(() => {
            statusDiv.textContent = '';
        }, 5000);
    });
}