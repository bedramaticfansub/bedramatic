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
    var filter = input.value.toUpperCase(); // Obtém o texto da barra de pesquisa e o transforma para maiúsculas
    var dramas = document.querySelectorAll(".sinopse"); // Seleciona todos os elementos com a classe "sinopse"

    dramas.forEach(function(drama) {
        var titleElement = drama.querySelector(".title"); // Para cada elemento "sinopse", procura o elemento com a classe "title" dentro dele

        // Verifica se o texto da barra de pesquisa está presente no texto do título (ignorando maiúsculas/minúsculas)
        if (titleElement.innerText.toUpperCase().indexOf(filter) > -1) {
            drama.style.display = "";  // Mostra o drama se houver correspondência
        } else {
            drama.style.display = "none";  // Oculta o drama se não houver correspondência
        }
    });
}
