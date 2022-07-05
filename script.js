var min = 0;
var sec = 0;
var fSec = 0;

var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var fractionSec = document.querySelector('#fSec');
var historic = document.querySelector('#historic');
var clear = document.querySelector('#clear');

var button = document.querySelector('#start');
var stop = document.querySelector('#zerar');

var condition = true;

var stopWatch;

clear.addEventListener('click', () => {
	var list = document.querySelector('#list');
	let newList = document.createElement('div');
	newList.id = 'list';
	historic.removeChild(list);
	historic.appendChild(newList);
})

button.addEventListener('click', () =>{
	if(condition){
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
		}, 10);
		condition = false;
		button.innerHTML = 'PAUSE';
	  } else {
		clearInterval(stopWatch);
		condition = true;
		button.innerHTML = 'START';
		var li = document.createElement('li');
		var content = document.createTextNode(minutes.innerHTML + ':' + seconds.innerHTML + ':' + fractionSec.innerHTML);
		li.appendChild(content);
		document.querySelector('#list').appendChild(li);
	  }
});

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