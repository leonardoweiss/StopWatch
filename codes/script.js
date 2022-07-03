var min = 0;
var sec = 0;
var fSec = 0;
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var fractionSec = document.querySelector('#fSec');

var stopWatch;

addEventListener('keypress', (enter) =>{
	if(enter.which == 13){
		clearInterval(stopWatch);
	  }
}, false);

addEventListener('keypress', (p) =>{
	if(p.which == 112){
		clearInterval(stopWatch);
		min = 0; sec = 0; fSec = 0;
		fractionSec.innerHTML = '00'; seconds.innerHTML = '00'; minutes.innerHTML = '00';
	  }
}, false);

addEventListener('keypress', (space) =>{
	if(space.which == 32){
		stopWatch = setInterval(() => {
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
	  }
}, false);