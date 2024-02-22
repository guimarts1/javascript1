const nomeSom = document.getElementById('nome-som');
const nomeBanda = document.getElementById('banda-nome');
const som = document.getElementById('audio');
const capa = document.getElementById('img-capa');
const play = document.getElementById('play');
const avancar = document.getElementById('avancar');
const voltar = document.getElementById('voltar');
const barraPro = document.getElementById('progresso-barra');
const progressContainer = document.getElementById('progress-container');

const NovemberRain = {
    nomeSom: 'November Rain',
    artist: 'Guns',
    file: 'guns'
};
const WindOfChange = {
    nomeSom: 'Wind Of Change',
    artist: 'Scorpions',
    file: 'scorpions5'
};
const BohemianRhapsody = {
    nomeSom: 'Bohemian Rhapsody',
    artist: 'Queen',
    file: 'Queen'
};
let tocando = false;
const playList = [NovemberRain, WindOfChange, BohemianRhapsody];
let index = 0;



function playsong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    som.play();
    tocando = true;
}

function pausesong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    som.pause();
    tocando = false;
}

function playPause(){
    if(tocando == true){
        pausesong();
    } else{
        playsong();
    }
}

function iniciarsom(){
    capa.src = `imagens/${playList[index].file}.webp`;
    som.src = `songs/${playList[index].file}.mp3`;
    nomeSom.innerText = playList[index].nomeSom;
    nomeBanda.innerText = playList[index].artist;
}

function voltarSom(){
    if(index === 0){
        index = playList.length - 1;
    } else{
        index -= 1
    }
    iniciarsom();
    playsong();
    
}
function avancarSom(){
    if(index === playList.length - 1){
        index = 0;
    } else{
        index += 1
    }
    iniciarsom();
    playsong();
    
}

function progressBar(){
    const barWidth = (som.currentTime/som.duration)*100;
    barraPro.style.setProperty('--progress', `${barWidth}%`);
}

function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX
    const jumpTotime = (clickPosition/width)* som.duration //posição do click * altura(width)
    som.currentTime = jumpTotime
}

iniciarsom();

play.addEventListener('click', playPause);
voltar.addEventListener('click', voltarSom);
avancar.addEventListener('click', avancarSom);
som.addEventListener('timeupdate', progressBar);
progressContainer.addEventListener('click', jumpTo)