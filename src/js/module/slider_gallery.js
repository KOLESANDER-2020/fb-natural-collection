import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';

var splide = new Splide( '.splide', {
	type   : 'loop',
	perPage: 4,
	perMove: 1,
	focus: 0,
	gap: '30px',
	trimSpace: false,
	breakpoints: {
		1050: {
		  perPage: 3,
		  gap    : '20px',
		},
		790: {
		  perPage: 2,
		  gap    : '15px',
		},
		550: {
		  perPage: 1,
		  gap    : '10px',
		},
	  },
  } );

  const counter = document.getElementById('slide-counter');

  // Обновить счётчик
  function updateCounter(index) {
    const total = splide.length; // общее число слайдов
    const current = (index % total) + 1; // номер слайда (от 1 до total)
    counter.textContent = `${current} of ${total}`;
  }

  // Начальное значение
  splide.on('mounted move', () => {
    updateCounter(splide.index);
  });
  
  splide.mount();

 
