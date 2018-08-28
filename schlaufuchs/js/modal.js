var moda1 = document.getElementById('id01');
var visuell = document.getElementById('Visuell');
var auditiv = document.getElementById('Auditiv');
var kinästhetisch = document.getElementById('Kinästhetisch');
var kommunikativ = document.getElementById('Kommunikativ');

window.onclick = function(event) {
	if (event.target === moda1) {
		moda1.style.display = "none";
	}else
	if (event.target === visuell) {
		visuell.style.display = "none";
	}else
	if (event.target === auditiv) {
		auditiv.style.display = "none";
	}else
	if (event.target === kinästhetisch) {
		kinästhetisch.style.display = "none";
	}else
	if (event.target === kommunikativ) {
		kommunikativ.style.display = "none";
	}
};