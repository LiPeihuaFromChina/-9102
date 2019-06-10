// 点击卡片 支持修改卡片内容的样式
// 点击卡片 支持选中修改卡片内容的哪一种样式
var contents = document.getElementsByClassName("content");
var orig = contents[0].style.backgroundColor;
var key = true;
var items = document.getElementsByTagName("i");//property
var secLists = document.getElementsByClassName("secondList");
var restore = document.getElementsByClassName("restore")[0];
var arr = [];
var styleName;
var styleValues;
var styleValue;
var style_selected = document.getElementsByClassName("style_selected")[0];
var value_selected = document.getElementsByClassName("value_selected")[0];
var orig = getStyle(contents[0],'backgroundColor');

function getStyle(elem,prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem,null)[prop];
	}else{
		return elem.currentStyle[prop];
	}
}

function change1(){
	for(var i = 0;i<items.length;i++){
	     items[i].onmouseover = function(){
	     	styleName = this.innerHTML;
	     	console.log(styleName);
	     	style_selected.innerHTML = styleName;
	     }
	}
}

function change2(){
	for(var a =0 ;a<secLists.length;a++){
		change1();
		secLists[a].onmouseover = function(){
			styleValues = this.getElementsByTagName('a');
			for(var k = 0;k<styleValues.length;k++){
		           styleValues[k].ondblclick = function(){
		           	    styleValue = this.innerHTML;
		           	    console.log(styleName + " " + styleValue);
		           	    value_selected.innerHTML = styleValue;
		           }
		    }
		}
	}
}

function changeStyle(elem){
	change2();
	 for(var i = 0,len = contents.length;i < len ;i++){
		contents[i].addEventListener('click',function(){
			if(this.style.backgroundColor === orig){
				  this.style.backgroundColor = "rgb(255,255,0)";
				  this.style.boxShadow = "2px 3px -3px #333333";
				  this.style[styleName] = styleValue + "";	
			}else{
	             this.style.backgroundColor = orig;
	             this.style.boxShadow = "0px 2px 3px #333333";	
			}
		})
	}
	restore.addEventListener('click',function(){
		for(var i = 0,len = contents.length;i < len ;i++){
			contents[i].style = "";
		}
	})
}

changeStyle();

