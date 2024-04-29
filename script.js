
var show = ()=>{
   var targrt = document.querySelector(".full");
   t1.play();
}

var hide = ()=>{
    var close = document.querySelector(".ri-close-large-line");
   t1.reverse();
}



var t1 = gsap.timeline()
t1.to(".full",{
    right:0,
    duration:0.6
});



t1.from(".full h4",{
    x:150,
    duration:1,
    stagger:0.6,
    opacity:0
});

t1.from(".full i",{
    opacity:0,
    
});

t1.pause();