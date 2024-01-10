document.addEventListener('DOMContentLoaded', function () {
	const carousel = document.querySelector('.carousel');
	const dots = document.querySelectorAll('.dot');

	let currentIndex = 0;

	function updateCarousel() {
    	const translateValue = -currentIndex * 1345;
    	carousel.style.transform = `translateX(${translateValue}px)`;
    	updateDots();
	}

	function updateDots() {
    	dots.forEach((dot, index) => {
        	dot.classList.toggle('active', index === currentIndex);
    	});
	}

	function nextSlide() {
    	currentIndex = (currentIndex + 1) % dots.length;
    	updateCarousel();
	}

	dots.forEach((dot, index) => {
    	dot.addEventListener('click', () => {
        	currentIndex = index;
        	updateCarousel();
    	});
	});

	setInterval(nextSlide, 5000); // Alterna para o próximo slide a cada 5 segundos
});


