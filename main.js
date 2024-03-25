// Variáveis globais
const msgsLuck = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiveres paciência.",
    "Não deixe que as dificuldades da vida tirem a sua alegria de viver.",
    "Tudo vai dar certo, só precisa acreditar.",
    "Acredite no impossível e ele se tornará possível.",
    "Mantenha-se positivo e coisas boas acontecerão.",
    "O sucesso está na jornada, não no destino.",
    "A vida é feita de momentos, aproveite cada um deles.",
    "Sorria sempre, um sorriso pode mudar tudo.",
    "Agradeça sempre, a gratidão atrai coisas boas."
];

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnReset = document.querySelector("#btnReset");
const btnSort = document.querySelector("#fortuneCookie");

const msgLucky = document.querySelector(".msgLuck p");

// Eventos
btnReset.addEventListener('click', toggleScreens);
btnSort.addEventListener('click', updateLuckyMessage);
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')){
        updateLuckyMessage()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreens()
        }
    }
)

// Função para atualizar a mensagem de sorte
function updateLuckyMessage() {
    msgLucky.textContent = selectMessageRandom();
    toggleScreens();
}

// Função para selecionar uma mensagem aleatória
function selectMessageRandom() {
    const indice = Math.floor(Math.random() * msgsLuck.length);
    return msgsLuck[indice];
}

// Função para alternar entre as telas
function toggleScreens() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}
