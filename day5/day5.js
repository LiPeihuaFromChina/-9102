var links = document.getElementsByTagName('link')[0];
var changeBtn = document.getElementsByClassName('changeBtn')[0];
var key = 1;

changeBtn.addEventListener('click',function(){
	key ++;
	let styleLink = links.getAttribute("href");
	let currentStyle = changeBtn.getAttribute("data-value");
	let newSource = currentStyle + key + ".css";
	links.href = newSource;
	this.innerHTML = "Style_" + key;
	if(key == 3){
		key = 0;
	}
})
