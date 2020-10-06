
var principal = document.querySelector('#principal');
var arquivos = document.querySelector('#arquivos');
var sobre = document.querySelector('#sobre');

var links = [ '/index.html', '/arquivos.html', '/sobre.html'];


function atual() {

    let atual = window.location.pathname;

    for(let i = 0; i <= links.length; i++){

        if(atual == links[i]){

    }
}

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