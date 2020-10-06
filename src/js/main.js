





// EasterEgg
var foto = document.querySelector('#foto');

var carregarFoto = function() {
    window.open(
    'https://drive.google.com/drive/folders/1qtxttmJeNK8ZmHSCx_UfsqmbOFu1H_y6?usp=sharing', '_blank'
    )
};
foto.addEventListener('click', carregarFoto, false);


// footer

function abrirGithub() {
    window.open(
        'https://github.com/tchiinhemba', '_blank'
    )
}