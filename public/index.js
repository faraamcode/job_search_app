const partnerElements1 = document.querySelector(".partner-1");
const partnerElements2 = document.querySelector(".partner-2");
const partnerElements3 = document.querySelector(".partner-3");

//
const herocontainer = document.querySelectorAll(".hero");
const ToggleHero = setInterval(()=> herocontainer.forEach((item)=> {
    if(item.classList.contains("active")){
        item.classList.remove("active")
        item.classList.add("previous")
    }else if(item.classList.contains("next")){
        item.classList.remove("next")
        item.classList.add("active")
        
    } else{
        item.classList.remove("previous")
        item.classList.add("next")

    }
}), 3000)
// 

const first1 = partnerElements1.firstElementChild
const second1 = partnerElements1.lastElementChild
const first2 = partnerElements2.firstElementChild
const second2 = partnerElements2.lastElementChild
const first3 = partnerElements3.firstElementChild
const second3 = partnerElements3.lastElementChild
const ToggleFunction = (element1, element2,t)=>{
    
    setInterval(()=>{
    if(!element1.classList.contains("show-partner")){ 
        element1.classList.add("show-partner")
    }
    else{ 
        
        element1.classList.remove("show-partner");
    } 
    
    if(!element2.classList.contains("show-partner")){ 
        element2.classList.add("show-partner")
    }
    else{ 
            element2.classList.remove("show-partner");
        } 
    }, t)
}
window.addEventListener("DOMContentLoaded", ()=>{
    
    first1.classList.add("left");
    second1.classList.add("right");
    first1.classList.add("show-partner");

    first2.classList.add("left");
    second2.classList.add("right");
    first2.classList.add("show-partner");

    
    first3.classList.add("left");
    second3.classList.add("right");
    first3.classList.add("show-partner");
    ToggleFunction(first1, second1, 5000)
    ToggleFunction(first2, second2, 7000)
    ToggleFunction(first3, second3, 9000)
    ToggleHero()
})