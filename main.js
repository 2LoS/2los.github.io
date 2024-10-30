/* Masthead scroll toggle */

let y = 0;
const masthead = document.getElementsByClassName("masthead")[0];
window.addEventListener("scroll", () => {
	if(window.scrollY < 32){
		masthead.removeAttribute("id");
	}
	else{
		masthead.setAttribute("id", ( window.scrollY < y ? "show-masthead" : "hide-masthead" ));
		y = window.scrollY;
	}
});


/* Hamburger menu toggle */

let active = false;
const btn = document.querySelector(".menu-toggle");
btn.addEventListener("click", () => {
	active = !active;
	if(active){
		btn.setAttribute("aria-expanded", "true");
		document.body.setAttribute("id", "lock-screen");
	}
	else{
		btn.setAttribute("aria-expanded", "false");
		document.body.removeAttribute("id");
	}
});

const menu = document.querySelector(".masthead nav");
menu.addEventListener("keydown", (e) => {
	if(e.key === "Escape"){
		active = false;
		btn.setAttribute("aria-expanded", "false");
		btn.focus();
		document.body.removeAttribute("id");
	}
});

const list = document.querySelectorAll(".menu-toggle ~ ul a[href]");
list.forEach((x) => {
	x.addEventListener("keydown", (e) => {
		if(active){
			if(e.key === "Tab"){
				if(e.shiftKey){
					if(e.target == list[0]){
						list[list.length - 1].focus();
						e.preventDefault();
					}
				}
				else{
					if(e.target === list[list.length - 1]){
						list[0].focus();
						e.preventDefault();
					}
				}
			}
		}
	});
});