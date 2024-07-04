const menu = document.querySelector('.menu-icon');
menu.addEventListener('click',(e)=>{
    const nav = document.querySelector('.sidebar');
    nav.classList.remove('hidden')
});
const close = document.querySelector('.close-icon');
close.addEventListener('click',(e)=>{
    const nav = document.querySelector('.sidebar');
    nav.classList.add('hidden')
});

const openMenus = document.querySelectorAll('.open');
openMenus.forEach((open)=>{
        open.addEventListener('click',()=>{
            open.closest('.menu-item').classList.toggle('active');
        });
})