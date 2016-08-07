function xhr(){
	var xhr = new XMLHttpRequest;
	xhr.open('GET','./01-vote.php',true);
	xhr.send(null);
	xhr.onreadystatechange = function(){
		var str = "";
		if(this.status == 200 && this.readyState == 4){
			
			str = str +"状态码" + this.status + '<br />';
			str = str +"状态文字是" + this.statusText + '<br />';
			str = str +"返回类型是" + this.getResponseHeader('Content-Type') + '<br />';
			str = str +"返回的主体长度是" + this.getResponseHeader('Content-length') + '<br />'
			str = str +"返回的文字为" + this.responseText + "<br />";
			str = str +"所有头信息" + this.getAllResponseHeaders() + "<br />";
			document.getElementById('echo').innerHTML = str;
		}
	}
}
