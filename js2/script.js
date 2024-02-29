const nomeSom = document.getElementById('nome-som');
const nomeBanda = document.getElementById('banda-nome');
const som = document.getElementById('audio');
const capa = document.getElementById('img-capa');
const play = document.getElementById('play');
const avancar = document.getElementById('avancar');
const voltar = document.getElementById('voltar');
const barraPro = document.getElementById('progresso-barra');
const progressContainer = document.getElementById('progress-container');
const shufleButton = document.getElementById('embaralhar');
const repeatButton = document.getElementById('repetir');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');

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
let embaralhado = false;
const originalPlayList = [NovemberRain, WindOfChange, BohemianRhapsody];
let sortedPlaylist = [...originalPlayList]
let index = 0;
let repeatOn = false;

//functions abaixo:

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
    capa.src = `imagens/${sortedPlaylist[index].file}.webp`;
    som.src = `songs/${sortedPlaylist[index].file}.mp3`;
    nomeSom.innerText = sortedPlaylist[index].nomeSom;
    nomeBanda.innerText = sortedPlaylist[index].artist;
}

function voltarSom(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
    } else{
        index -= 1
    }
    iniciarsom();
    playsong();
    
}
function avancarSom(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
    } else{
        index += 1
    }
    iniciarsom();
    playsong();
    
}

function updateProgress(){
    const barWidth = (som.currentTime/som.duration)*100;
    barraPro.style.setProperty('--progress', `${barWidth}%`);
    songTime.innerText = dataHmin(som.currentTime);
}

function jumpTo(event){
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX
    const jumpTotime = (clickPosition/width)* som.duration //posição do click * altura(width)
    som.currentTime = jumpTotime
}

function shufleButtonclick(){
    if(embaralhado === false){
        embaralhado = true;
        shuflePlaylistArray(sortedPlaylist);
        shufleButton.classList.add('button-active')
    } else{
        embaralhado = false;
        shuflePlaylistArray(...originalPlayList);
        shufleButton.classList.remove('button-active')
    }
}

function shuflePlaylistArray(preshuflePlaylistArray){
   const size = preshuflePlaylistArray.length;//3 musicas
   let currentIndex = size - 1;
   while(currentIndex > 0){
        let ramdomIndex = Math.floor(Math.random()* size);
        let aux = preshuflePlaylistArray[currentIndex];
        preshuflePlaylistArray[currentIndex] = preshuflePlaylistArray[ramdomIndex];
        preshuflePlaylistArray[ramdomIndex] = aux;
        currentIndex -= 1;
   }
}

function repeatButtonclick(){
    if(repeatOn === false){
        repeatOn = true;
        repeatButton.classList.add('button-active');
    } else{
        repeatOn = false;
        repeatButton.classList.remove('button-active');
    }
}

function nextOrRepeat(){
    if(repeatOn === false){
        avancarSom();
    } else{
        playsong();
    }
}

function dataHmin(originalNumber){
    let hora = Math.floor(originalNumber / 3600);
    let min = Math.floor((originalNumber - hora * 3600) / 60);
    let seg = Math.floor(originalNumber - hora * 3600 - min * 60);

    return (`${hora.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`);

    //toString - transforma numeros em texto corrido
}

function updateTotalTime(){
    totalTime.innerText = dataHmin (som.duration);
}

iniciarsom();

//eventos abaixo:
play.addEventListener('click', playPause);
voltar.addEventListener('click', voltarSom);
avancar.addEventListener('click', avancarSom);
som.addEventListener('timeupdate', updateProgress);
som.addEventListener('ended', nextOrRepeat);
som.addEventListener('loadedmetadata', updateTotalTime);
progressContainer.addEventListener('click', jumpTo);
shufleButton.addEventListener('click', shufleButtonclick);
repeatButton.addEventListener('click', repeatButtonclick);
