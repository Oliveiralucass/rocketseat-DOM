const openModalButton = document.getElementById('openModal')
const mainModalDiv = document.getElementById('mainModalDiv')


openModalButton.addEventListener('click', function(){
    mainModalDiv
        .classList
        .add('active');
});

document.onkeyup = function(event){
    if (event.key === "Escape" && 
        mainModalDiv.classList.contains('active')) {
            mainModalDiv.classList.remove('active');
        }
}