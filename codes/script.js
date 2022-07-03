var min = 0;
var sec = 0;
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
setInterval(() => {
	if (sec < 9) {
		seconds.innerHTML = '0' + ++sec;
	} else {
		seconds.innerHTML = ++sec;
	}
}, 1000)