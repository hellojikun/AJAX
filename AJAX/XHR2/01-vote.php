<?php
	
	if(rand(0, 10)<4){
		
		echo 0;
	}
	else{
		
	$cnt = file_get_contents('./res.txt');
	$cnt += 1;
	file_put_contents('./res.txt', $cnt);
	//利用HTTP的204请求
	//header('HTTP/1.1 204 NO Content');
	//204接受请求，但不返回任何实体信息，浏览器页面不发生更新
	//AJAX不一定要使用XHR，只要向后台发送信息，不刷新页面即可
	echo "1";
	}