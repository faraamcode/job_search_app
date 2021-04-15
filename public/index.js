const partnerElements1 = document.querySelector(".partner-1");
const partnerElements2 = document.querySelector(".partner-2");
const partnerElements3 = document.querySelector(".partner-3");
const Header = document.querySelector(".header")
//
const herocontainer = document.querySelectorAll(".hero");
// 
const menus = document.querySelectorAll(".menu");
const submenu = document.querySelector(".sub-menu");

console.log(menus);
const ToggleHero = ()=> {setInterval(()=> herocontainer.forEach((item)=> {
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
}), 5000)

}
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

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 200){
       Header.classList.add("fixed-header") 
    }else{
        Header.classList.remove("fixed-header") 

    }
})
// 
const removeSubmunu = ()=>{
    setTimeout(()=>{
        submenu.classList.remove("show-submenu")

    },4000)
}
menus.forEach((menu)=>{
    menu.addEventListener("mouseover",(e)=> {
     submenu.classList.add("show-submenu")
     removeSubmunu();   
    });
})
