//variaveis numericas
var min = 0;
var sec = 0;
var fSec = 0;
//variaveis para relogio
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var fractionSec = document.querySelector('#fSec');
//variaveis para o historico
var historic = document.querySelector('#historic');
var historicDown = document.querySelector('#historicDown');
var clear = document.querySelector('#clear');
var clearDown = document.querySelector('#clearDown');
//variaveis para botoes
var button = document.querySelector('#start');
var stop = document.querySelector('#zerar');
var countdown = document.querySelector('#countdown');
//variaveis booleans
var condition = true;
var countdownInit = false;
//variavel para setInterval
var stopWatch;

//funcao limpar historico
clear.addEventListener('click', () => {
	let list = document.querySelector('#list');
	let newList = document.createElement('div');
	newList.id = 'list';
	historic.removeChild(list);
	historic.appendChild(newList);
});

clearDown.addEventListener('click', () => {
	let list = document.querySelector('#listDown');
	let newList = document.createElement('div');
	newList.id = 'listDown';
	historicDown.removeChild(list);
	historicDown.appendChild(newList);
});

//funcao mostrar botoes 'less' e 'most'
countdown.addEventListener('click', () => {
	if (countdownInit) {
		document.querySelector('#most').style.visibility = 'hidden';
		document.querySelector('#less').style.visibility = 'hidden';
		countdownInit = false;
	} else {
		document.querySelector('#most').style.visibility = 'visible';
		document.querySelector('#less').style.visibility = 'visible';
		countdownInit = true;
	}
});

//funcoes para adicionar e subtrair no relogio
var most = (time) => {
	if (time == 'sec') {
		if (sec < 9) {
			seconds.innerHTML = '0' + ++sec;
		} else {
			seconds.innerHTML = ++sec;
		}
		if (sec > 59) {
			seconds.innerHTML = '00';
			sec = 0;
		}
		if (sec < 0) {
			seconds.innerHTML = '59';
			sec = 59;
		}
	} else if(time == 'min'){
		if (min < 9) {
			minutes.innerHTML = '0' + ++min;
		} else {
			minutes.innerHTML = ++min;
		}
		if (min > 99) {
			minutes.innerHTML = '00';
			min = 0;
		}
	}
}
var less = (time) => {
	if (time == 'sec') {
		if (sec < 9) {
			seconds.innerHTML = '0' + --sec;
		} else {
			seconds.innerHTML = --sec;
		}
		if (sec < 0) {
			seconds.innerHTML = '59';
			sec = 59;
		}
	} else if(time == 'min') {
		if (min < 9) {
			minutes.innerHTML = '0' + --min;
		} else {
			minutes.innerHTML = --min;
		}
		if (min < 0) {
			minutes.innerHTML = '99';
			min = 99;
		}
	}
}

//funcao start e pause / adicionar historico / tanto para cronometro, quanto countdown
button.addEventListener('click', () =>{
	if(condition){
		if (!countdownInit) {
			stopWatch = setInterval(() => {
				if (fSec < 9) {
					fractionSec.innerHTML = '0' + ++fSec;
				} else {
					fractionSec.innerHTML = ++fSec;
				}
				if (fSec > 99) {
					fractionSec.innerHTML = '00'
					fSec = 0;
					if (sec < 9) {
						seconds.innerHTML = '0' + ++sec;
					} else {
						seconds.innerHTML = ++sec;
					}
					if (sec > 59) {
						seconds.innerHTML = '00';
						sec = 0;
						if (min < 9) {
							minutes.innerHTML = '0' + ++min;
						} else {
							minutes.innerHTML = ++min;
						}
					}
				}
				countdown.style.visibility = 'hidden';
			}, 10);
		} else {
			stopWatch = setInterval(() => {
				if (fSec < 10) {
					fractionSec.innerHTML = '0' + --fSec;
				} else {
					fractionSec.innerHTML = --fSec;
				}
				if (fSec < 0) {
					fractionSec.innerHTML = '99'
					fSec = 99;
					if (sec < 11) {
						seconds.innerHTML = '0' + --sec;
					} else {
						seconds.innerHTML = --sec;
					}
					if (sec < 0) {
						seconds.innerHTML = '59';
						sec = 59;
						if (min < 9) {
							minutes.innerHTML = '0' + --min;
						} else {
							minutes.innerHTML = --min;
						}
						if (min < 0) {
							min = 0;
							minutes.innerHTML = '00';
						}
					}
				}
				if (fSec < 1 && sec <= 0 && min <= 0) {
					clearInterval(stopWatch);
					button.innerHTML = 'RESTART';
					document.body.style.backgroundColor = '#000';
					const audio = new Audio('song/music.mp3');
					audio.play();
				}
			}, 10);
		}
		condition = false;
		button.innerHTML = 'PAUSE';
		document.querySelector('#most').style.visibility = 'hidden';
		document.querySelector('#less').style.visibility = 'hidden';
	} else {
		clearInterval(stopWatch);
		condition = true;
		button.innerHTML = 'START';
		if (!countdownInit) {
			let li = document.createElement('li');
			let content = document.createTextNode(minutes.innerHTML + ':' + seconds.innerHTML + ':' + fractionSec.innerHTML);
			li.appendChild(content);
			document.querySelector('#list').appendChild(li);

			countdown.style.visibility = 'visible';
		} else {
			let li = document.createElement('li');
			let content = document.createTextNode(minutes.innerHTML + ':' + seconds.innerHTML + ':' + fractionSec.innerHTML);
			li.appendChild(content);
			document.querySelector('#listDown').appendChild(li);

			document.querySelector('#most').style.visibility = 'visible';
			document.querySelector('#less').style.visibility = 'visible';
		}
		document.body.style.backgroundColor = 'var(--color5)';
		song.src = '';
	}
});

//funcao para resetar
stop.addEventListener('click', () =>{
	clearInterval(stopWatch);
	
	min = 0; 
	sec = 0; 
	fSec = 0;
	
	fractionSec.innerHTML = '00'; 
	seconds.innerHTML = '00'; 
	minutes.innerHTML = '00';
	
	button.innerHTML = 'START';
});