const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', handleHumberger);
close.addEventListener('click', handleHumberger);


function handleHumberger() {
    close.classList.contains('hide')? close.classList.remove('hide') : close.classList.add('hide');
}

// // dropdown menue
// document.addEventListener('click', e => {
//     const isDropdownButton = e.target.matches("[data-dropdown-button]")
//     if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

//     let currentDropdown;
//     if(isDropdownButton) {
//         currentDropdown = e.target.closest('[data-dropdown]');
//         // currentDropdown.classList.toggle('active')
//     }

//     document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//         if(dropdown === currentDropdown) return;
//         dropdown.classList.remove('active');
//     })
// })