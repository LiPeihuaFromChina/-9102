
// 如何可视宽度 少于 800 不显示sideBar
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var sideBar = document.getElementsByClassName("sideBar")[0];
var wrap = document.getElementsByClassName("wrap")[0];
var key = true;

// 如可视宽度少于 800 没点击关闭 sidebar 不显示sideBar 
// 如监控可视区域大于800 没点击关闭 显示 sidebar

function allow_closeBar(){
	if(key){
		sideBar.style.visibility = "visible";
		closeBtn.onclick = function(){
			sideBar.className += " close";
			key = false;
		}
	}
}

function widthMonitor(){
	var userWidth = document.body.offsetWidth;
	if(userWidth > 800 && key == true){
        sideBar.style.visibility = "visible";
        allow_closeBar();
	}else if(userWidth < 800 ){
		sideBar.style.visibility = "hidden";
	}else{
        allow_closeBar();
	}
}

widthMonitor();