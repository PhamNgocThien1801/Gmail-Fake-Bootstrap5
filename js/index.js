const avatar = document.querySelector('.avatar');
const popover = document.querySelector('.popover');
avatar.addEventListener('click', function() {
    popover.classList.toggle('active');
});
const hambergerCheckbox = document.getElementById('hamberger-checkbox');
const navbarContent = document.querySelector('.navbar-content');
hambergerCheckbox.addEventListener('change', function() {
    if (hambergerCheckbox.checked) {
        navbarContent.style.display = 'none';
    } else {
        navbarContent.style.display = 'block';
    }
});


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})