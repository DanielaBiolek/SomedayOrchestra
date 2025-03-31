const hamMenu = document.querySelector('.ham-menu');

const offSreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offSreenMenu.classList.toggle('active');
    }
)