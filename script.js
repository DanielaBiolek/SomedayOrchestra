const hamMenu = document.querySelector('.menu_hamburger');

const offScreenMenu = document.querySelector('.menu-off-screen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)

const menuItem1 = document.querySelector('#ham-item1');

menuItem1.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)

const menuItem2 = document.querySelector('#ham-item2');

menuItem2.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)
const menuItem3 = document.querySelector('#ham-item3');

menuItem3.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)
const menuItem4 = document.querySelector('#ham-item4');

menuItem4.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)
const menuItem5 = document.querySelector('#ham-item5');

menuItem5.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)

const hamburger = document.querySelector('.menu_hamburger');
const span1 = document.querySelector('#hamspan1');
const span2 = document.querySelector('#hamspan2');
const span3 = document.querySelector('#hamspan3');

hamburger.addEventListener('mouseover', () => {
    hamburger.classList.add('hover')
    }
)

hamburger.addEventListener('mouseout', () => {
    hamburger.classList.remove('hover')
    }
)