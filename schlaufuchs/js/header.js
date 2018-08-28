window.onscroll = function() {stickyFn();};

var navbar = document.getElementById('navbar');
var navbar_logo = document.getElementById('navbar-logo');
var main = document.getElementById('main');

var sticky = navbar.offsetTop;
var space = navbar.offsetHeight + 50;

function stickyFn() {
	
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		main.style.marginTop = space + "px";
		navbar_logo.style.opacity = "1";
		navbar_logo.style.visibility = "visible";
	} else {
		navbar.classList.remove("sticky");
		main.style.marginTop = "0px";
		navbar_logo.style.opacity = "0";
		navbar_logo.style.visibility = "hidden";
	}
}