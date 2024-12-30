let icon=document.querySelector("#iconname");
icon.addEventListener("click",function(){
    let navmenu=document.querySelector(".navpt2");
    let headingSize=document.querySelector("h2").style.color="blue";
    headingSize=document.querySelector("h2").style.transition=".9s ease-out";
    navmenu.classList.toggle("hidden");

})