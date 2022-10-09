
var hmmenu = document.querySelector(".hm-menu");
const prt_div = document.querySelector("#portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const model_overley = document.querySelector(".model-overley");
const images =document.querySelectorAll(".images img");
const next_btn =document.querySelector(".next-btn");
const prev_btn =document.querySelector(".prev-btn");



function hmmenutoggle(){
    hmmenu.classList.toggle("hm-menu-height"); 
}


let sr = ScrollReveal({
  duration:2000,
  distance:"60px",
});

sr.reveal(".chat");
sr.reveal(".hire-me",{ origin:"top"});

sr.reveal("#services",{ origin:"left"});
sr.reveal(".work-xp-ltd",{ origin:"left"});
sr.reveal(".arrow2",{ origin:"up"});
sr.reveal(".arrow1",{ origin:"left"});

// let sl = ScrollReveal({
//   duration:1500,
//   distance:"60px",
// });
// sl.reveal(".f-review",{ origin:"left"});
// sl.reveal(".tnd-review",{ origin:"up"});
// port

let mixer = mixitup('.port-gl');

// model pop up animation
let currentindex = 0;

zoom_icons.forEach((icn,i) => icn.addEventListener("click",() => {
    prt_div.classList.add("open");
    document.body.classList.add("stopScrolling");
    currentindex = i;
    changeImage(currentindex);
}));

model_overley.addEventListener("click",() => {prt_div.classList.remove("open");
 document.body.classList.remove("stopScrolling");
});


prev_btn.addEventListener("click",() => {
    if(currentindex === 0){
        currentindex=11
    }else{
        currentindex--;
    }
  
    changeImage(currentindex);
});
next_btn.addEventListener("click",() => {
    if(currentindex === 11){
        currentindex=0
    }else{
        currentindex++;
    }
  
    changeImage(currentindex);
});


function changeImage(index){
   images.forEach((img) => img.classList.remove("showImage"));
   console.log(images[index]);
//    images[index].classList.add("showImage");
}



// typed js 

var typed = new Typed(".type-0", {
    strings: ["Web Designer . Graphic Designer . Wordpress Expert"],
    typeSpeed: 50,
    showCursor: false,
    // backSpeed: 60,
    loop: false
});

// sticky nav

window.addEventListener("scroll",function(){
    var pd = document.querySelector(".pdul");
    pd.classList.toggle("sticky",window.scrollY >0);
})


// active nav

// document.querySelectorAll('.nav-link').forEach(link => {
//     if(link.href === window.location.href){
//       link.setAttribute('aria-current', 'location')
//     }
// })

// owl carosol

// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         items:1,
//         loop:true,
//         autoplay:false,
//         autoplayTimeout:3000

//     });
//   });