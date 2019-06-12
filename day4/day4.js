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
	placeholder.innerHTML = title;
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
    	var bgImg = container.style.backgroundImage;
    	container.style = " ";
    	container.style.backgroundImage = bgImg;
    	console.log(bgImg);
    })
}
changeStyle();
