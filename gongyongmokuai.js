(function (){ 
window["公用模块"] = {}
function ts_lnbox(msg){

    alert(msg);

}

function ts_ask(msg){





    return confirm(msg);

}

function ts_input(tprompt, tcontent){





    return prompt(tprompt, tcontent);

}

function trace(msg){



	console.log(msg);

}

function str_verticalbar(str){





	var tstr;

	var tstrs;

	var tstr2;

	var index= 0;



	tstr = str;

	if(tstr == "" ){

		return "";

	}

	tstrs = 文本操作.分割文本(tstr,"|");

	if(数组操作.取成员数 (tstrs) == 0 ){

		return "";

	}else{

		tstr = "";

		mui.each(tstrs,function(索引,成员){

			tstr2 = tstrs[index];

			if(tstr == "" ){

				tstr = "　　" + tstr2;

			}else{

				tstr = tstr + "\n" + "　　" + tstr2;

			}

			index = index + 1;

		})

		return tstr;

	}

}

function str_encrypt(str, pw){





	var tstr;

	if(pw == null ){

		pw = "ucksjg";

	}

	tstr = 加密操作1.rc4加密(str, pw);

	return tstr;

}

function str_decrypt(str, pw){





	var tstr;

	if(pw == null ){

		pw = "fucksjg";

	}

	tstr = 加密操作1.rc4解密(str, pw);

	return tstr;

}

function str_timenow(){





	var tstr;





	tstr = 时间操作.取现行日期() + "/" + 时间操作.取现行时间();



	tstr = 文本操作.子文本替换(tstr, "/", "");

	tstr = 文本操作.子文本替换(tstr, ":", "");

	return tstr;

}

function str_getrandomnumber(len){





	var tstr= "";

	while(文本操作.取文本长度(tstr) < len){

		tstr = tstr + 转换操作.到文本(数学操作.取随机数(1, 9));

	}

	return tstr;

}

function str_isnumber(str){





	var tlog= false;

	var tnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	var index= 0;

	mui.each(tnums,function(索引,成员){

		if(str == 转换操作.到文本(成员) ){

			tlog = true;

			return false;

		}

		index = index + 1;

	})

	return tlog;

}

function net_getmid(tstr){





	var tstr1;

	var tstrs;

	if(tstr == "" ){

		return "";

	}

	tstr1 = 公用模块.str_getmid(tstr, "\\[ONLINEHOME\\]","\\[ONLINEEND\\]");

	if(tstr1 != 0 ){

		tstr1 = 公用模块.str_decrypt(tstr1, "fucksjg");

		return tstr1;

	}

}

function net_iscampus(tstr){









	var tstr1;

	var tstrs;

	var tlogstr= "否";

	tstr1 = tstr;

	if(tstr1 != "" ){

		公用模块.trace("取到的超星源码不为空");

		tstrs = 文本操作.取指定文本(tstr1, "找到相关的", "种");

		if(数组操作.取成员数(tstrs) != 0 ){

			tstr1 = tstrs[0] + "种";

			tstrs = 文本操作.取指定文本(tstr1, "<b>", "种");

			if(数组操作.取成员数(tstrs) != 0 ){

				tstr1 = tstrs[0];

				tstr1 = 文本操作.删首尾空(tstr1);

				if(tstr1 != "" ){

					tlogstr = "是";

				}

			}

		}

	}else{

		tlogstr = "否";

	}

	读写设置.保存设置("校园网", tlogstr);

	return tlogstr;

}

function time_wait(ms){



	var tnum1;

	var tnum2;

	公用模块.trace("开始等待");

	tnum1 = 时间操作.取时间戳(时间操作.取当前日期时间());

	tnum2 = 时间操作.取时间戳(时间操作.取当前日期时间());

	while( tnum2 - tnum1 < ms){

		tnum2 = 时间操作.取时间戳(时间操作.取当前日期时间());

	}

	公用模块.trace("等待结束");

}

function str_cnblogsurl(url){



	var tstr;

	var tstr2;

	var tnum;

	var tstrs;

	tstr = url;

	if(文本操作.寻找文本(tstr, "cnblogs", 0) == -1 ){

		return tstr;

	}



	tstrs = 文本操作.取指定文本(tstr, "t=", "&download");

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr = tstrs[0];



		tstr2 = tstr;



		tnum = 文本操作.取文本长度(tstr);



		tstr = 公用模块.str_getrandomnumber(tnum);





		tstr = 文本操作.子文本替换(url, tstr2, tstr);







		return tstr;

	}else{

		return tstr;



	}

}

function str_getmid(tstr, begin, end){

	var tstr1;

	var tstrs;

	tstrs = 文本操作.取指定文本(tstr, begin, end);

	if(数组操作.取成员数(tstrs) != 0 ){

		tstr1 = tstrs[0];

		return tstr1;

	}else{

		return "";

	}

}

function num_isinarray(num,array){

	var tlog= false;

	mui.each(array,function(索引,成员){







		if(num==成员 ){

			tlog=true;

			return tlog;

		}

	})

	return tlog;

}

function num_getrandomarray(min, max, count){

	var tarray = [];

	var tnum;

	tnum = 数学操作.取随机数(min,max);

	数组操作.加入尾成员(tarray,tnum);

	while(数组操作.取成员数(tarray) < count){

		tnum = 数学操作.取随机数(min, max);

		while(num_isinarray(tnum,tarray) == true){

			tnum = 数学操作.取随机数(min,max);

		}

		数组操作.加入尾成员(tarray,tnum);

	}

	return tarray;

}

function str_stripquote(str){

	var tstr;





	tstr = str;

	if(文本操作.取文本左边(tstr, 1) == 转换操作.代码转字符(34) ){

		tstr = 文本操作.取文本右边(tstr, 文本操作.取文本长度(tstr)-1);

	}

	if(文本操作.取文本右边(tstr, 1) == 转换操作.代码转字符(34) ){

		tstr = 文本操作.取文本左边(tstr, 文本操作.取文本长度(tstr)-1);

	}

	if(文本操作.取文本左边(tstr, 1) == 转换操作.代码转字符(39) ){

		tstr = 文本操作.取文本右边(tstr, 文本操作.取文本长度(tstr)-1);

	}

	if(文本操作.取文本右边(tstr, 1) == 转换操作.代码转字符(39) ){

		tstr = 文本操作.取文本左边(tstr, 文本操作.取文本长度(tstr)-1);

	}

	return tstr;

}

function domp_gets1(thtml, css1, css2, indexfromcss2, getinnertext, attribute, include, exclude, replacea, withb){

















	var tobjs = [];

	var tobjs1 = [];

	var tobjs2 = [];

	var thtml1 = [];

	var rest= "";

	var tobj;

	var rests = [];

	var rests1 = [];

	数组操作.清空数组(tobjs);

	if(css2 == "" ){





		tobjs = domp_html2objs(thtml, css1);



	}else{



		thtml1 = domp_html2htmls(thtml, css1);





		mui.each(thtml1,function(索引,成员){

			if(indexfromcss2 == -1 ){



				tobjs1 = domp_html2objs(成员, css2);



			}else{



				数组操作.清空数组(tobjs1);

				tobjs2 = domp_html2objs(成员, css2);

				tobj = tobjs2[indexfromcss2];

				数组操作.加入尾成员(tobjs1, tobj);

			}

			mui.each(tobjs1,function(索引,成员){

				数组操作.加入尾成员(tobjs, 成员);

			})



		})

	}



	数组操作.清空数组(rests1);

	mui.each(tobjs,function(索引,成员){

		if(getinnertext == true ){

			rest = 成员.innerText;

		}else{

			rest = 成员.getAttribute(attribute);

		}



		数组操作.加入尾成员(rests1, rest);

	})

	数组操作.清空数组(rests);

	mui.each(rests1,function(索引,成员){



		if(str_isinexclude(成员, include, exclude) == true ){

			if(数组操作.取成员数(replacea) == 0 || 数组操作.取成员数(withb) == 0 ){



				rest = 成员;

			}else{

				rest = str_replace(成员, replacea, withb);

			}

			数组操作.加入尾成员(rests, rest);

		}

	})

	return rests;

}

function domp_html2htmls(thtml, css){



	const parser = new DOMParser();

	var doc;

	var tobjs;

	var rets = [];



	doc = parser.parseFromString(thtml, "text/html");

	tobjs = doc.querySelectorAll(css);

	mui.each(tobjs,function(索引,成员){



		数组操作.加入尾成员(rets, 成员.innerHTML);

	})



	return rets;

}

function domp_html2objs(thtml, css){



	const parser = new DOMParser();

	var doc;

	var tobjs;

	doc = parser.parseFromString(thtml, "text/html");

	tobjs = doc.querySelectorAll(css);

	return tobjs;

}

function domp_html2innertexts(thtml, css){



	const parser = new DOMParser();

	var doc;

	var tobjs;

	var rets = [];



	doc = parser.parseFromString(thtml, "text/html");

	tobjs = doc.querySelectorAll(css);

	mui.each(tobjs,function(索引,成员){



		数组操作.加入尾成员(rets, 成员.innerText);

	})

	return rets;

}

function domp_html2attributes(thtml, css, attribute){



	const parser = new DOMParser();

	var doc;

	var tobjs;

	var rets = [];



	doc = parser.parseFromString(thtml, "text/html");

	tobjs = doc.querySelectorAll(css);

	mui.each(tobjs,function(索引,成员){

		数组操作.加入尾成员(rets, 成员.getAttribute(attribute));

	})

	return rets;

}

function str_isinexclude(tstr, include, exclude){

	if(文本操作.删首尾空(tstr) == "" ){

		return false;

	}

	if(include == "" ){



		if(exclude == "" ){





			return true;

		}else{



			if(文本操作.寻找文本(tstr, exclude, 0) != -1 ){



				return false;

			}else{



				return true;

			}

		}

	}else{





		if(文本操作.寻找文本(tstr, include) == -1 ){

			return false;

		}else{





			if(exclude == "" ){





				return true;

			}else{



				if(文本操作.寻找文本(tstr, exclude, 0) == -1 ){



					return true;

				}else{



					return false;

				}

			}

		}

	}

}

function str_replace(tstr, tstr1, tstr2){





	if(数组操作.取成员数(tstr1) == 0 ){

		return tstr;

	}

	if(数组操作.取成员数(tstr2) == 0 ){

		return tstr;

	}

	if(数组操作.取成员数(tstr1) != 数组操作.取成员数(tstr2) ){

		return tstr;

	}

	mui.each(tstr1,function(索引,成员){

		tstr = 文本操作.子文本替换(tstr, 成员, tstr2[索引]);

	})

	return tstr;

}

function str_joinarray(tstrs, witha){

	var res= "";

	if(数组操作.取成员数(tstrs) == 0 ){

		return "";

	}

	mui.each(tstrs,function(索引,成员){

		if(索引 == 0 ){

			res = 成员;

		}else{

			res = res + witha + 成员;

		}

	})

	return res;

}

function import_jssrc(thref){

	var JS = document.createElement("script");



	JS.src = thref;

	document.getElementsByTagName("head").item(0).appendChild(JS);

}

function import_jstext(ttext){

	var JS = document.createElement("script");

	JS.type = "text/javascript";

	JS.text = tstr;

	document.getElementsByTagName("head").item(0).appendChild(JS);

}
window["公用模块"]["ts_lnbox"]=ts_lnbox;
window["公用模块"]["ts_ask"]=ts_ask;
window["公用模块"]["ts_input"]=ts_input;
window["公用模块"]["trace"]=trace;
window["公用模块"]["str_verticalbar"]=str_verticalbar;
window["公用模块"]["str_encrypt"]=str_encrypt;
window["公用模块"]["str_decrypt"]=str_decrypt;
window["公用模块"]["str_timenow"]=str_timenow;
window["公用模块"]["str_getrandomnumber"]=str_getrandomnumber;
window["公用模块"]["str_isnumber"]=str_isnumber;
window["公用模块"]["net_getmid"]=net_getmid;
window["公用模块"]["net_iscampus"]=net_iscampus;
window["公用模块"]["time_wait"]=time_wait;
window["公用模块"]["str_cnblogsurl"]=str_cnblogsurl;
window["公用模块"]["str_getmid"]=str_getmid;
window["公用模块"]["num_isinarray"]=num_isinarray;
window["公用模块"]["num_getrandomarray"]=num_getrandomarray;
window["公用模块"]["str_stripquote"]=str_stripquote;
window["公用模块"]["domp_gets1"]=domp_gets1;
window["公用模块"]["domp_html2htmls"]=domp_html2htmls;
window["公用模块"]["domp_html2objs"]=domp_html2objs;
window["公用模块"]["domp_html2innertexts"]=domp_html2innertexts;
window["公用模块"]["domp_html2attributes"]=domp_html2attributes;
window["公用模块"]["str_isinexclude"]=str_isinexclude;
window["公用模块"]["str_replace"]=str_replace;
window["公用模块"]["str_joinarray"]=str_joinarray;
window["公用模块"]["import_jssrc"]=import_jssrc;
window["公用模块"]["import_jstext"]=import_jstext;
})();