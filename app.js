const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//modal 
document.querySelectorAll('.project-img a').forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = event.currentTarget.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'block';
    });
});

document.querySelectorAll('.close-modal').forEach(function(closeIcon) {
    closeIcon.addEventListener('click', function() {
        closeIcon.closest('.project-modal').style.display = 'none';
    });
});

window.onclick = function(event) {
    if (event.target.classList.contains('project-modal')) {
        event.target.style.display = 'none';
    }
};
