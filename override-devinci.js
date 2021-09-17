// document.getElementsByTagName('body')[0].classList.add('override');

body = document.getElementsByTagName('body')[0].classList.add('override');


document.write('<div><h1>⚠ Mais où est le CSS ?!! ⚠</h1><button class="btn-css-recup">Récupérez le !</button></div>');
document.write('<img class="img-panique" src="https://st.depositphotos.com/2224394/2351/i/600/depositphotos_23517607-stock-photo-business.jpg">');

img = document.querySelector('.img-panique');
btn = document.querySelector('.btn-css-recup');


btn.addEventListener('click', function () {
    document.write('<h2>Et non ! On va pas vous le rendre aussi facilement ;)</h2>');
    img.style.display = "none";

});
