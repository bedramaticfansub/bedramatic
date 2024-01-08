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



function search() {
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();
    var titles = document.querySelectorAll(".sinopse"); // Substitua ".title" pela classe dos seus títulos

    titles.forEach(function(title) {
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            title.style.display = "";
        } else {
            title.style.display = "none";
        }
    });
}


