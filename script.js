'use strict';

const searchClick = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
btn.addEventListener('click', () => {
        searchClick.classList.toggle('active');
        input.focus();
        console.log('button pressed');}
       
);