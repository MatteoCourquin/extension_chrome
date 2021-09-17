// document.getElementsByTagName('body')[0].classList.add('override');

document.getElementsByTagName('body')[0].classList.add('override');

btn = document.querySelector('.btn-css-recup');


document.write('<h1>⚠ Mais où est le CSS ?!! ⚠</h1>');
document.write('<img src="https://st.depositphotos.com/2224394/2351/i/600/depositphotos_23517607-stock-photo-business.jpg">');
document.write('<button class="btn-css-recup">Récupérez le !</button>');


function maFonction() {
    body.classList.remove('override')
}

btn.addEventListener('click', maFonction)



