const hamMenu = document.querySelector('.menu_hamburger');

const offScreenMenu = document.querySelector('.menu-off-screen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)

const menuItem = document.querySelector('.menu_item-ham');

menuItem.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');
    }
)