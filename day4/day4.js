// 点击图片，图片显示在container

var container = document.getElementsByClassName('container')[0];
var images = document.getElementsByTagName('img');
var placeholder = document.getElementsByClassName('placeholder')[0];
var borderStyle = document.getElementsByClassName('borderStyle')[0];
var listStyle = document.getElementsByClassName('listStyle')[0];
var backgroundStyle = document.getElementsByClassName('backgroundStyle')[0];
var borderStyle = document.getElementsByClassName('borderStyle')[0];
var submitBtn = document.getElementsByClassName('submit');
var styleName,
    styleValue;
var styleOptions = document.getElementsByClassName('styleOption');
var inputValue = document.getElementsByClassName('inputValue');
var restore = document.getElementsByClassName('restore')[0];
var show_index = 0;
var timer;
var show_key = true;

for(var i = 0;i<images.length;i++){
	let k = i;
	images[k].onclick = function(){
		showPic(this);
	}
}

function showPic(whichpic){
	var source = whichpic.getAttribute("src");
	var title = whichpic.getAttribute("title");
	var url = "url(" +   source   + ")";
	container.style.backgroundImage = "url(" +   source   + ")";
	placeholder.innerHTML = title;
	console.log(url);
}
// 自由选择需要修改的style和style value，点击提交后，修改显示在container的图片
function changeStyle(){
	for(var i = 0;i<submitBtn.length;i++){
		let index = i;
		submitBtn[i].addEventListener('click',function(){
			var selectContent = styleOptions[index].getElementsByTagName('select')[0];
			var selectIndex =  selectContent.selectedIndex;
			styleName = selectContent.options[selectIndex].value;
			styleValue = inputValue[index].value;
			container.style[styleName] = styleValue + "";
		})
	}
    restore.addEventListener('click',function(){
    	if(show_key){
	        var bgImg = container.style.backgroundImage;
	    	container.style = " ";
	    	container.style.backgroundImage = bgImg;
	    	clearInterval(timer);
	    	this.innerHTML = "开始轮播，修改样式";
	    	console.log(show_key);
	    	show_key = false;
    	}else{
    		clearInterval(timer);
    		timer = setInterval(relayShow,2000);
    		this.innerHTML = "停止轮播，清除样式";
    	}
    })
}
changeStyle();

timer = setInterval(relayShow,2000);

function relayShow(){
     if(show_index >= 0 && show_index < images.length){
     	let current_image = images[show_index];
        container.style.backgroundImage = "url(" + current_image.getAttribute("src")  + ")";
        placeholder.innerHTML = current_image.getAttribute("title");
        show_index++;
        console.log(show_index);
     }else{
     	show_index = 0;
     }
}
