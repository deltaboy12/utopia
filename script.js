function showPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(page).classList.add("active")

}

document.getElementById("search").addEventListener("keydown",function(e){

if(e.key==="Enter"){

let q=this.value

if(q.startsWith("http")){
window.location.href=q
}
else if(q.includes(".")){
window.location.href="https://"+q
}
else{
window.location.href="https://duckduckgo.com/?q="+encodeURIComponent(q)
}

}

})
