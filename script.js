function go(){

let input=document.getElementById("search").value

let frame=document.getElementById("frame")

document.getElementById("home").style.display="none"

frame.style.display="block"

if(input.startsWith("http")){

frame.src=input

}
else if(input.includes(".")){

frame.src="https://"+input

}
else{

frame.src="https://duckduckgo.com/?q="+encodeURIComponent(input)

}

}

function home(){

document.getElementById("frame").style.display="none"

document.getElementById("home").style.display="flex"

}

function cloak(){

let tab=window.open("about:blank","_blank")

let iframe=tab.document.createElement("iframe")

iframe.style.width="100%"

iframe.style.height="100%"

iframe.style.border="none"

iframe.src=window.location.href

tab.document.body.style.margin="0"

tab.document.body.appendChild(iframe)

}
