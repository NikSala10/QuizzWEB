const wordsRandom = ['nube', 'payaso', 'murmullo']
let numberRandom = Math.floor((Math.random() * wordsRandom.length))
let selectWord = wordsRandom[numberRandom]
let arrayLetters = selectWord.split('')
let palabraOculta = Array(arrayLetters.length).fill('_')

let errores = 0;
let mistakes = [];

const palabraO = document.getElementById('word')
palabraO.textContent= palabraOculta;

const btnVerify = document.getElementById('verify')
btnVerify.addEventListener('click', () => {
    verificarLetra()
})

const randomBtn = document.getElementById('random')
randomBtn.addEventListener('click', () => {
    nuevaPalabra()
})


const palabraInvisible = () => {
    document.getElementById('word').innerText = palabraOculta
}

const verificarLetra = () => {

    const input = document.querySelector('.input')
    let letra = input.value.toLowerCase()

    if (input.value === '') {
        throw new Error("Ingresa una letra");
        
    }

    if (arrayLetters.includes(letra)) {
        arrayLetters.forEach((letr, index) => {
            if (letr === letra) {
                palabraOculta[index] = letra
            }
        });
    }else {
        mistakes.push(letra)
        document.getElementById('mistakes').innerText = mistakes;
        errores++
    }

    if (errores >= 6) {
      document.getElementById('message').innerText = '💀 Game Over';
      setTimeout(() => {
        nuevaPalabra()
      }, 1000);
    }

    input.value = '';
    palabraInvisible()

    document.getElementById('errores').innerText = errores

    if (!palabraOculta.includes('_')) {
        document.getElementById('message').innerText = '🎉 Ganaste!'
        setTimeout(() => {
            nuevaPalabra()
        }, 1000);
    }

}

const nuevaPalabra = () => {
    numberRandom = Math.floor((Math.random() * wordsRandom.length))
    selectWord = wordsRandom[numberRandom]
    arrayLetters = selectWord.split('')
    palabraOculta = Array(arrayLetters.length).fill('_')
    errores = 0;
    mistakes = [];
    palabraInvisible();
    document.getElementById('errores').innerText = errores;
    document.getElementById('message').innerText = '';
    document.querySelector('.input').value = ''
    document.getElementById('mistakes').innerText = mistakes;
}