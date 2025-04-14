mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",null,标题栏1_右侧图标被单击,null);
var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var 按钮组1 = new 按钮组("按钮组1",按钮组1_被单击);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 编辑框2 = new 编辑框("编辑框2",null,null,null,null,null);
var 图片框1 = new 图片框("图片框1",null);
var 网络操作1 = new 网络操作("网络操作1",网络操作1_发送完毕);
var 加密操作1 = new 加密操作("加密操作1");
var 剪贴板1 = new 剪贴板("剪贴板1");
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


	图片框1.置图片("https://qr.api.cli.im/qr/index/jsonp_generate?data=https://qr05.cn/Cb729V&kid=cliim");

	部署按钮组1();
	部署菜单();

}
function 部署菜单(){

	菜单1.清空菜单项();

	菜单1.添加菜单项("示例");



	菜单1.添加菜单项("通用爬虫");

}

function 按钮1_被单击(){

	if(编辑框1.取内容() == "" ){

		编辑框2.置内容("请先输入或粘贴问题进来！");

		return;

	}

	deepseek_silicon(编辑框1.取内容());

}

function deepseek_silicon(pt){

	var url;

	var key;

	编辑框2.置内容("思考中……\n\n非流式输出，耗时稍长，请耐心等待。");

	url = "https://api.siliconflow.cn/v1/chat/completions";

	key = "U2FsdGVkX1+g8bGdev2rslxNyvr3gbKAtin8jpVTluXdTNTdFXiBKAcSFYh07AwSjUaSzcka/RZ2kZGtFJwVJRnhHA==";

	key = 公用模块.str_decrypt(key, "fucksjg");

	pt = pt + "\n以上是文献检索需求，请告诉我在【中国知网】中检索相关文献应该如何设置检索词，如何选择检索入口等，尽量得到好结果。";

	网络操作1.置附加请求头({"Authorization": "Bearer " + key, "Content-Type": "application/json"});

	网络操作1.发送网络请求(url, "post", "json", { "model": "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B", "messages": [ { "role": "user", "content": pt } ], "max_tokens": 16384, "temperature": 0.7, "top_p": 0.7, "top_k": 50, "frequency_penalty": 0.5, "n": 1, "response_format": {"type": "text"} }, 6000000);

}

function 网络操作1_发送完毕(发送结果,返回信息){

	console.log(返回信息);





	编辑框2.置内容(返回信息.choices[0].message.content);

}

function 部署按钮组1(){

	按钮组1.置标题(0,"清空");

	按钮组1.置标题(1, "复制");

	按钮组1.置标题(2, "示例");

}

function 按钮组1_被单击(按钮索引){

	switch(按钮索引){

	case 0 :

		编辑框1.置内容("");

		编辑框1.获取焦点();

	break;
	case 1 :

		剪贴板1.置剪贴板内容(编辑框1.取内容());





		break;
	}

}





function 标题栏1_右侧图标被单击(){

	菜单1.显示菜单();

}
function 菜单1_菜单项被单击(菜单项标题){

	switch(菜单项标题){

	case "示例" :

		编辑框1.置内容("想在“中国知网”中检索与“信息素养”相关文献，要求如下：\n近5年内论文，太老的文献不需要；\n文章内容突出“人工智能”或“元宇宙”或“智能检索”；\n文章需提到“师范大学图书馆信息素养课程”。");





	break;
	case "通用爬虫" :

		窗口操作.打开指定网址("https://affiliate.bazhuayu.com/M8lKUC", 2);

		break;
	}

}