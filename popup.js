function checkAd(){
var blocked=0;
var url = (window.location.href.split("://")[1]).split("/")[0];
var div = document.getElementsByTagName('div');
var a = document.getElementsByTagName('a');
var p = document.getElementsByTagName('p');
var ins = document.getElementsByTagName('ins');
for (i=0;i<div.length;i++){
	try{
	if (div[i].id.includes("ads")){div[i].remove();blocked+=1}
	else if(div[i].className.includes("head")){}
	else if(div[i].id.includes("head")){}
	else if (div[i].className.includes("ads")){div[i].remove();blocked+=1}
	else if (div[i].id.includes("_ad_") || div[i].id.includes("ad_")){div[i].remove();blocked+=1}
	else if (div[i].className.includes("_ad_") || div[i].className.includes("ad_")){div[i].remove();blocked+=1}
	else if (div[i].id.includes("-ad-") || div[i].id.includes("ad-")){div[i].remove();blocked+=1}
	else if (div[i].className.includes("-ad-") || div[i].className.includes("ad-")){div[i].remove();blocked+=1}
	else if (div[i].id.includes("-dfp") || div[i].id.includes("dfp-")){div[i].remove();blocked+=1}
	else if (div[i].className.includes("-dfp") || div[i].className.includes("dfp-")){div[i].remove();blocked+=1}
	else if (div[i].className.includes("advertisement") || div[i].className.includes("advert")){div[i].remove();blocked+=1}
	else if (div[i].className.includes("_adv_")){div[i].remove();blocked+=1}
	else if (div[i].className.includes("advideo_") || div[i].className.includes("_advideo")){div[i].remove();blocked+=1}
	else if (div[i].id.includes("advertisement") || div[i].id.includes("advert") || div[i].id.includes("advertisement-") || div[i].id.includes("-advertisement")){div[i].remove();blocked+=1}
	else if (div[i].id.includes("_adv_")){div[i].remove();blocked+=1}
	else if (div[i].id.includes("advideo_") || div[i].id.includes("_advideo")){div[i].remove();blocked+=1}
	else continue;
	}
	catch(err){}
}
for (i=0;i<a.length;i++){
	try{
	if (a[i].src.includes(".googleads") || a[i].src.includes("googleads.")){a[i].remove();blocked+=1}
	if (a[i].src.includes(".adssettings") || a[i].src.includes("adssettings.")){a[i].remove();blocked+=1}
	else continue;
	}
	catch(err){}
}
for (i=0;i<p.length;i++){
	try{
	if (p[i].id.includes("-ad") || p[i].id.includes("ad-") || p[i].id.includes("_ad") || p[i].id.includes("ad_")){p[i].remove();blocked+=1}
	else continue;
	}
	catch(err){}
}
for (i=0;i<ins.length;i++){
	try{
		if (ins[i].className.includes('ads') || ins[i].className.includes("advertisement")){ins[i].remove();blocked+=1}
		else continue;
	}
	catch(err){}
}
if (blocked!=0) console.log(blocked);
setTimeout(checkAd, 10000);
return blocked;
}
checkAd()