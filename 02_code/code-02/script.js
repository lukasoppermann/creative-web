var toggleDialog = function(){
    var dialog = document.querySelector('.js-dialog');
    dialog.classList.toggle('is-hidden');
}

var img = document.querySelector('.img-preview');
img.addEventListener('click', toggleDialog);

var dialogBg = document.querySelector('.js-dialog');
dialogBg.addEventListener('click',toggleDialog);
