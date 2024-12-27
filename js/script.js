let resultado = document.getElementById('password-result');
document.querySelector('button').addEventListener('click', ()=>{
    let tamanho = parseInt(document.querySelector('input').value);

    GerarSenhas(tamanho);
})

function GerarSenhas(tamanho) {
    let caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let senha ='';
    for (let i = 0; i < tamanho; i++) {
        let index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(index);
    }

    
    resultado.innerHTML = senha;
}