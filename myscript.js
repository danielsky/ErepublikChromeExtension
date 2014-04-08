var btnStart = document.createElement("input");
btnStart.setAttribute("type","button");
btnStart.setAttribute("id","btnStart");
btnStart.setAttribute("value", "Start");
btnStart.addEventListener("click", function() { 
	startFFF(); 
},false);

var btnStop = document.createElement("input");
btnStop.setAttribute("type","button");
btnStop.setAttribute("id","btnStop");
btnStop.setAttribute("value", "Stop");
btnStop.disabled=true;
btnStop.addEventListener("click",function() { 
	stopFFF(); 
},false);

var btnMinus = document.createElement("input");
btnMinus.setAttribute("type","button");
btnMinus.setAttribute("value", "-");
btnMinus.setAttribute("class", "plusMinusBtn");
btnMinus.addEventListener("click",function() { 
	var val = parseInt(document.getElementById('timeInterval').value) - 100;
	document.getElementById('timeInterval').setAttribute("value",val);
},false);

var btnPlus = document.createElement("input");
btnPlus.setAttribute("type","button");
btnPlus.setAttribute("value", "+");
btnPlus.setAttribute("class", "plusMinusBtn");
btnPlus.addEventListener("click",function() { 
	var val = parseInt(document.getElementById('timeInterval').value) + 100;
	document.getElementById('timeInterval').setAttribute("value",val);
},false);

var btnHid = document.createElement("input");
btnHid.setAttribute("type","text");
btnHid.setAttribute("id","timeInterval");
btnHid.setAttribute("readonly","readonly");
btnHid.setAttribute("value","3000");

var myDiv = document.createElement("div");
myDiv.setAttribute("id","erepToolContent");

myDiv.appendChild(btnStart);
myDiv.appendChild(btnStop);
myDiv.appendChild(btnMinus);
myDiv.appendChild(btnHid);
myDiv.appendChild(btnPlus);

//var foot = document.getElementById("footer");
//var cont = document.getElementById("container");
//cont.insertBefore(myDiv,foot);

var cont = document.getElementById("content");
cont.appendChild(myDiv);