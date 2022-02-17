'use strict';

// navbar variable 
const navbarNav = document.querySelector('.navbar-nav');
const navbarToggleBtn = document.querySelector('.nav-toggle-btn');

// navbar toggle function 
navbarToggleBtn.addEventListener('click', function() {

    navbarNav.classList.toggle('active');
    this.classList.toggle('active');
});