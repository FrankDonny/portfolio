const menu = document.querySelector('.menu-icon');
menu.addEventListener('click', ()=>{
    const menuList = document.querySelector('#navbar');
    if (menuList.style.display === 'block'){
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
})