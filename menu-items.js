const menuItemsRef=document.getElementById("menu-items");
const textRef=document.querySelector(".txt");

menuItemsRef.addEventListener("click", onitemclick);

function onitemclick(event) {
if(event.target.nodeName!=="LI"){
return;
}
textRef.classList.toggle("invisible");
}