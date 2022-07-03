var min = 0;
var sec = 0;
var fSec = 0;
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var fractionSec = document.querySelector('#fSec');
var stopWatch = setInterval(() => {
	if (fSec < 9) {
		fractionSec.innerHTML = '0' + ++fSec;
	} else {
		fractionSec.innerHTML = ++fSec;
	}
	if (fSec > 99) {
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
				minutes.innerHTML = '0' + ++min + ':';
			} else {
				minutes.innerHTML = ++min + ':';
			}
		}
	}
}, 10);

addEventListener('keypress', (e) =>{
	if(e.which == 13){
		clearInterval(stopWatch);
	  }
}, false)