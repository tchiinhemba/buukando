var pagIndex = document.querySelector('#principal');
var gitHb = document.querySelector('#nomefooter');

pagIndex.onclick = function() {
    pagIndex.href = "sobre.html"
};



// footer

function abrirGithub() {
    window.open(
        'https://github.com/tchiinhemba', '_blank'
    )
}