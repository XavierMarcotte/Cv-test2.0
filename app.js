const bouton = document.querySelector('.impression');
function impress() {
    bouton.addEventListener('click' ,() => {
        window.print();
    })
}
impress();