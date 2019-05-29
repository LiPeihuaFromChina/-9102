// 点击oepn btn content 展开 点击close btn content关闭
var closeBtn = document.getElementsByClassName("close");
var contents = document.getElementsByClassName("content");
var len = closeBtn.length;

function change(){
	for(var i = 0;i<len;i++){
		let index = i;
		closeBtn[i].onclick = function(){
			if(this.innerHTML !=  "OPEN"){
	           contents[index].style.display = "none";
	           this.innerHTML = "OPEN"; 
			}else{
	           contents[index].style.display = "block";
	           this.innerHTML = "CLOSE";
			}
		}
	}
}

change()