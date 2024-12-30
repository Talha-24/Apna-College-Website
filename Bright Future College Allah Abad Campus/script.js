// let mode=prompt("Enter a Screen Color");



// // if(mode === "white"){
// //     document.body.style.backgroundColor="#dadada";
// //     document.body.style.color="black";
// // }
// // if(mode === "white"){
// //     document.body.style.backgroundColor="black";
// //     document.body.style.color="white";
// // }
let icon=document.querySelector("#menuicon");
icon.addEventListener("click",function(){
    let navmenu=document.querySelectorAll(".items a");
    let heading=document.querySelector(".logo").style.display="none";
    
    navmenu.classList.toggle("hidden");
})