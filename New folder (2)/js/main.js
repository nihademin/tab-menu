let btn=document.querySelectorAll(".basliq")
let acc=document.querySelectorAll(".panel")

btn.forEach(nihad=>{
    nihad.onclick=function(){
        this.nextElementSibling.classList.toggle("panelactive")
    }
})




