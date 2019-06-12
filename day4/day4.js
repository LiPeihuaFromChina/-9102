// 点击图片，图片显示在container

var container = document.getElementsByClassName('container')[0];
var images = document.getElementsByTagName('img');

for(var i = 0;i<images.length;i++){
	let k = i;
	images[k].onclick = function(){
		showPic(this);
	}
}

function showPic(whichpic){
	var source = whichpic.getAttribute("src");
	var title = whichpic.getAttribute("title");
	container.style.backgroundImage = "url(" +   source   + ")";
}