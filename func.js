var timer;

function fight(){
	document.getElementById('fight_btn').click();
	var timeToWait = parseInt(document.getElementById('timeInterval').value);
	timer = setTimeout(function () {
		fight();
	},timeToWait);
}

function startFFF(){
	document.getElementById('btnStop').disabled=false;
	document.getElementById('btnStart').disabled=true;
	fight();
}

function stopFFF(){
	clearTimeout(timer);
	document.getElementById('btnStop').disabled=true;
	document.getElementById('btnStart').disabled=false;
}