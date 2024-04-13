generarContraseña();

function generarContraseña() {
    const button = document.getElementById('button');
    const contraseñaGenerada = document.getElementById('password');
    const caracteres = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'á', 'é', 'í', 'ó', 'ú', 'ü',
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<',
    '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

    button.addEventListener('click', function() {
        const numero = Math.floor(Math.random() * 13) + 8;
        let contraseña = '';
        for (let i = 0; i < numero; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            const caracterAleatorio = caracteres[indiceAleatorio];
            contraseña += caracterAleatorio;
        }
        contraseñaGenerada.value = contraseña;
        copiaralPortapapeles(contraseña);
    })
}

function copiaralPortapapeles(text) {
    const copy = document.getElementById('copy');

    copy.addEventListener('click', function() {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        alert('La contraseña se ha copiado en tu portapapeles');
    })
}