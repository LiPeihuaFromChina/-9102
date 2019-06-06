// 点击卡片 支持修改卡片内容的样式
// 点击卡片 支持修改卡片内容的哪一种样式
var contents = document.getElementsByClassName("content");
var orig = contents[0].style.backgroundColor;

function getStyle(elem,prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem,null)[prop];
	}else{
		return elem.currentStyle[prop];
	}
}

var orig = getStyle(contents[0],'backgroundColor');
console.log(orig);

for(var i = 0,len = contents.length;i < len ;i++){
	contents[i].addEventListener('click',function(){
		console.log(orig);
		if(this.style.backgroundColor != orig){
			  this.style.backgroundColor = "yellow";	
		}else{
             this.style.backgroundColor = parseInt(orig);
		}
	})
}

// function getStyle(obj){
// 	let firstList = document.getElementsByClassName(firstList)[0];
// 	let styleItems = firstList.getElementsByClassName()
// }