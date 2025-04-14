mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",null,标题栏1_右侧图标被单击,null);
var 浏览框1 = new 浏览框("浏览框1",null);
var 浏览框2 = new 浏览框("浏览框2",null);
var 浏览框3 = new 浏览框("浏览框3",null);
var 浏览框4 = new 浏览框("浏览框4",null);
var 浏览框5 = new 浏览框("浏览框5",null);
var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 菜单1 = new 菜单("菜单1",菜单1_菜单项被单击);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

function 主窗口_创建完毕(){
	部署底部按钮组();
	部署浏览框();
	部署整体菜单();

}
function 部署浏览框(){



	var theight;
	theight = 窗口操作.取窗口高度()-45-40-12;

	浏览框1.置尺寸("100%", theight+"px");
	浏览框2.置尺寸("100%", theight+"px");
	浏览框3.置尺寸("100%", theight+"px");
	浏览框4.置尺寸("100%", theight+"px");
	浏览框5.置尺寸("100%", theight+"px");
	浏览框1.置可视(true);
	浏览框2.置可视(false);
	浏览框3.置可视(false);
	浏览框4.置可视(false);
	浏览框5.置可视(false);
	浏览框1.跳转("https://apsoft-ai.github.io/dsson/index.html");
	浏览框2.跳转("https://mfindsdnu.libsp.cn/#/Home");
	浏览框3.跳转("https://apsoft-ai.github.io/ds-cnki/index.html");
	浏览框4.跳转("https://www.cnki.net");
	浏览框5.跳转("https://apsoft-ai.github.io/ds-find-cnki/about.html");
}
function 部署底部按钮组(){
	按钮组1.置标题(0, "深求发现");
	按钮组1.置标题(1, "发现");
	按钮组1.置标题(2, "深求知网");
	按钮组1.置标题(3, "知网");
}
function 部署整体菜单(){
	菜单1.清空菜单项();

	菜单1.添加菜单项("关于");





}
function 按钮组1_被单击(按钮索引){
	switch(按钮索引){
	case 0 :

		浏览框1.置可视(true);
		浏览框2.置可视(false);
		浏览框3.置可视(false);
		浏览框4.置可视(false);
		浏览框5.置可视(false);
		标题栏1.置标题("DeepSeek");
	break;
	case 1 :

		浏览框1.置可视(false);
		浏览框2.置可视(true);
		浏览框3.置可视(false);
		浏览框4.置可视(false);
		浏览框5.置可视(false);
		标题栏1.置标题("图书馆发现系统");
	break;
	case 2 :

		浏览框1.置可视(false);
		浏览框2.置可视(false);
		浏览框3.置可视(true);
		浏览框4.置可视(false);
		浏览框5.置可视(false);
		标题栏1.置标题("DeepSeek - cnki");
	break;
	case 3 :

		浏览框1.置可视(false);
		浏览框2.置可视(false);
		浏览框3.置可视(false);
		浏览框4.置可视(true);
		浏览框5.置可视(false);
		标题栏1.置标题("中国知网");
		break;
	}
}
function 标题栏1_右侧图标被单击(){
	菜单1.显示菜单();
}
function 菜单1_菜单项被单击(菜单项标题){

	switch(菜单项标题){

	case "关于" :

		浏览框1.置可视(false);
		浏览框2.置可视(false);
		浏览框3.置可视(false);
		浏览框4.置可视(false);
		浏览框5.置可视(true);









		break;
	}

}