"use strict"
// window.addEventListener('DOMcontentLoaded', function(){
    const btn = document.querySelector("#btn"),
    modal = document.querySelector('.lheader'),
    bar = document.querySelector(".picche"),
    icon1 = document.querySelector(".acti"),
    icon2 = document.querySelectorAll(".acti1"),
    bir = document.querySelector(".bir"),
    btn1 = document.querySelector(".btn1"),
    btn2 = document.querySelector(".btn2"),
    inputt = document.querySelector(".inp"),
    sendd = document.querySelector(".sendd"),
    input1 = document.querySelector(".inp1"),
    ong = document.querySelector(".ong"),
    loader = document.querySelector('.loader'),
    homeac = document.querySelector('#homeac');

    
console.log(icon2)
// 
// /////////////////////////////////
setTimeout(function(){
    loader.style.opacity = '0';
    setTimeout(function(){
    loader.style.display = 'none';
    }, 1000)
    }, 2500)
// /////////////////////////////////
inputt.addEventListener("click", ()=>{
    inputt.style.color = "white"
    inputt.style.background = "rgb(24, 194, 9)"
    
})
input1.addEventListener("click", ()=>{
    input1.style.color = "white"
    input1.value = ""
})
sendd.addEventListener("click", ()=>{
    inputt.style.background = "rgb(48, 47, 47)"
    inputt.value = ""
})
// icon2.forEach(item, () =>{
// item.addEventListener("click", function(){
//     item.style.color = 'crimson'
// })
// })
    bar.addEventListener('click', function(){
        modal.classList.toggle("active");
        bar.classList.toggle("active");
    });
    icon1.addEventListener('click', function(){
        icon1.style.background= "none"
        
    })
    homeac.addEventListener("click", function(){
        homeac.classList.toggle("#accordion")
    })
btn2.addEventListener("click", function(){
    btn2.style.background  = "blue";
    btn1.style.background = "transparent";
    
})
btn1.addEventListener("click", function(){
    btn2.style.background = "transparent"
    btn1.style.background = "blue"
})
createfon()
function createfon(){
let fon = document.createElement('div');

fon.classList.add('fon')
document.body.appendChild(fon)
} 

// slider watches////////////////
const slides = document.querySelectorAll('.offer__slide'),
    next = document.querySelector('.offer__slider-next');

    console.log(slides.length)
    let slideIndex=1;
show(slideIndex)
    function show(s){
    if(s > slides.length){
    slideIndex = 1;
    }
    if(s < 1){
        slideIndex = slides.length
    }
    slides.forEach(item => item.style.cssText = "display: none")
    slides[slideIndex - 1].style.display = 'block'
    }
    function sliderplus(s){
    show(slideIndex += 1)
    }
        next.addEventListener('click', ()=>{
        sliderplus(1)
})

// slider watches//////////////////////////////////////////



const rasm = document.querySelector(".rasm"),
    close =document.querySelector(".close"),
    card =document.querySelector(".cart"),
    body = document.body,
    fon = document.querySelector('.fon'),
    social = document.querySelector('.iconsocial');
    console.log(fon)
    rasm.addEventListener("click", function(){
        ong.style.display = 'block'
        fon.style.display = 'block'
    

    })

    fon.addEventListener('click', function(){
        ong.style.display = 'none'
        fon.style.display = 'none'
    })
    social.addEventListener('click', function(){
        ong.style.display = 'none'
        fon.style.display = 'none'
    })
// })
