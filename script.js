var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x-10+"px";
    cursor.style.top = dets.y-10+"px";
    blur.style.left = dets.x-200+"px";
    blur.style.top = dets.y-200+"px";
})
var h4all = document.querySelectorAll("h4, h3, #page1 #arrow, #f1, #nav img, .card");
h4all.forEach(element => {
    element.addEventListener("mouseenter", function(){
        cursor.style.transform = "scale(4)";
        cursor.style.border = "0.1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    })
    element.addEventListener("mouseleave", function(){
        cursor.style.transform = "scale(1)";
        cursor.style.border = "0px solid #fff";
        cursor.style.backgroundColor = "#95C11E";
    })
});


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:100,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -5%",
        scrub:1,
        scroll:true
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start: "top -30%",
        end:"top -70%",
        scrub:1,
        scroll:true,
    }
})
gsap.from("#about-us img, #about-us-in",{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 45%",
        end:"top 48%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-30,
    x:-30,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 60%",
        scrub:3
    }
})
gsap.from("#colon2",{
    y:30,
    x:30,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 88%",
        end:"top 90%",
        scrub:3
    }
})
gsap.from("#page5 h1",{
    y:40,
    scrollTrigger:{
        trigger:"#page5 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 80%",
        scrub:3
    }
})