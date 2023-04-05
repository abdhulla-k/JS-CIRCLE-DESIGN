const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', handleHumberger);
close.addEventListener('click', handleHumberger);


function handleHumberger() {
    close.classList.contains('hide')? close.classList.remove('hide') : close.classList.add('hide');
}