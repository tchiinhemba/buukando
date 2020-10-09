

document.querySelector('#principal').addEventListener('click', function(){
    window.location.assign('index.html');
}, false);

document.querySelector('#arquivos').addEventListener('click', function(){
    window.location.assign('arquivos.html');
}, false);

document.querySelector('#sobre').addEventListener('click', function(){
    window.location.assign('sobre.html');
}, false);

document.querySelector('#btn-insta').addEventListener('click', function(){
    window.open('https://www.linkedin.cn/in/tchiinhemba/', '_blank');
}, false);


// footer
function abrirGithub() {
    window.open(
        'https://github.com/tchiinhemba', '_blank'
    )
};
