

var foto = document.querySelector('#foto');



// EasterEgg

foto.onclick = function(){ window.open(
    'https://drive.google.com/drive/folders/1qtxttmJeNK8ZmHSCx_UfsqmbOFu1H_y6?usp=sharing', '_blank'
)};
foto.addEventListener('click', function(){ window.open(
    'https://drive.google.com/drive/folders/1qtxttmJeNK8ZmHSCx_UfsqmbOFu1H_y6?usp=sharing', '_blank'
)}, false);


document.removeEventListener('click', function(){
    window.open(
        'https://drive.google.com/drive/folders/1qtxttmJeNK8ZmHSCx_UfsqmbOFu1H_y6?usp=sharing', '_blank'
    )
}, true);



// footer

function abrirGithub() {
    window.open(
        'https://github.com/tchiinhemba', '_blank'
    )
}