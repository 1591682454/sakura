// ==UserScript==
// @name         Oneindex-extension
// @version      0.2
// @description  添加调用本地视频播放器按钮到视频文件中
// @author       hql
// @include      这里写你的域名 例www.sakura.com/*
// @grant        none
// ==/UserScript==

(function(){
				var v_list=["avi","wmv","mpeg","mp4","m4v","mov","asf","flv","f4v","rmvb","rm","3gp","vob"]
				var url_s="potplayer://"+document.getElementById("url").textContent;
				for(var i=0;i<v_list.length;i++){
					if(url_s.substring(url_s.lastIndexOf(".")+1)==v_list[i]){
            console.log(url_s);
						var play_btn=document.createElement("div");
						play_btn.setAttribute("style","display:flex;align-items: center;justify-content: center;font-size:30px;color:white;width:50px;height:50px;background: #F51D62;position: fixed;right: 0;bottom: 0;border-radius:50%;margin:20px;box-shadow:0px 5px 20px 5px rgba(245,29,98,0.5);");
            play_btn.innerHTML='<canvas id="play" width="20px" height="20px"></canvas>';
						document.body.appendChild(play_btn);
            var cxt=document.getElementById("play").getContext("2d");
            cxt.beginPath();
            cxt.moveTo(5,0);
            cxt.lineTo(20,12);
            cxt.lineTo(5,20);
            cxt.closePath();
            cxt.fillStyle="#1b1b2f";
            cxt.fill();
						play_btn.onclick=function(){
							window.location.href=url_s;
						}
						return false;
					}
				}
				
})();
