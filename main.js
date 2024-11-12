/* Masthead scroll toggle */

let y = 0;
const masthead = document.querySelector(".masthead");
window.onscroll = () => {
	if(window.scrollY < 32){
		masthead.setAttribute("id", "");
	}
	else{
		masthead.setAttribute("id", ( window.scrollY < y ? "show-masthead" : "hide-masthead" ));
		y = window.scrollY;
	}
};

/* Hamburger menu toggle */

class Menu {

	constructor(x){
		this.active = false;
		this.btn = x;
	}

	isActive(){
		return this.active;
	}

	openMenu(){
		this.active = true;
		this.btn.setAttribute("aria-expanded", "true");
		document.body.setAttribute("id", "lock-screen");
	}

	closeMenu(){
		this.active = false;
		this.btn.setAttribute("aria-expanded", "false");
		document.body.setAttribute("id", "");
	}

	toggleMenu(){
		this.active = !this.active;
		this.btn.setAttribute("aria-expanded", this.active);
		document.body.setAttribute("id", ( this.active ? "lock-screen" : "" ));
	}

}

const btn = document.querySelector(".menu-toggle");
const menu = new Menu(btn);

window.onresize = () => {
	if(900 < window.innerWidth){
		menu.closeMenu();
	}
};

btn.onclick = () => {
	menu.toggleMenu();
};

const menulist = document.querySelector(".masthead nav");
menulist.onkeydown = (e) => {
	if(e.key === "Escape"){
		btn.focus();
		menu.closeMenu();
	}
};

const list = menulist.querySelectorAll("a[href]");
const last = list[list.length - 1];
btn.onkeydown = (e) => {
	if(menu.isActive()){
		if(e.shiftKey && e.key === "Tab"){
			last.focus();
			e.preventDefault();
		}
	}
};
last.onkeydown = (e) => {
	if(menu.isActive()){
		if(!e.shiftKey && e.key === "Tab"){
			btn.focus();
			e.preventDefault();
		}
	}
};