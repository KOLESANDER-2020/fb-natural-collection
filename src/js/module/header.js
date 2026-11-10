document.addEventListener("DOMContentLoaded", () => {
	const burger = document.querySelector(".js-burger-menu");
	const menu = document.querySelector(".js-header-menu-list");
	const body = document.body;

	if (!burger || !menu) return;

	const toggleMenu = (isOpen) => {
		menu.classList.toggle("open", isOpen);
		burger.classList.toggle("active", isOpen);
		burger.setAttribute("aria-expanded", isOpen);
		burger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
		body.style.overflow = isOpen ? "hidden" : "";
	};

	burger.addEventListener("click", () => {
		toggleMenu(!menu.classList.contains("open"));
	});

	menu.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => toggleMenu(false));
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && menu.classList.contains("open")) toggleMenu(false);
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 680 && menu.classList.contains("open")) toggleMenu(false);
	});
});
