import '../scss/style.scss';
import './module/slider_gallery.js';
import './module/form_block.js';
import './module/header.js';






import init from './script.js';
init()


document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("year").textContent = new Date().getFullYear();})


