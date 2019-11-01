const btns=document.querySelectorAll(".btn")
const panels=document.querySelectorAll(".tab-item")
const contents=document.querySelector(".tab-container")
btns.forEach(btn=>{
btn.addEventListener("click", ()=>{
    //btnb hmtlde verilen tag nameleri goturmek
let tagname=btn.getAttribute("tag")
//slice texti kesmek ucun
tagname=tagname.slice(tagname.length-1,tagname.length)
//active classinin hamisindan silmek ucun
contents.querySelector(".active").classList.remove("active")
//tab-item classlarini loopa salmaq 
panels.forEach(panel=>{
    //tab item icerisinden atributlari tapmaq ucun
let panelId=panel.getAttribute("num")
if(panelId==tagname){
    //tapdigimiz tab-item classlarina active classini elave etmek 
    panel.classList.add("active")
}
})
})
})


