
// gsap.from('.page1 .box',{
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   rotate: 360
// });

// gsap.from('.page2 .box',{
//   scale: 0,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger:{
//     trigger: ".page2 .box",
//     scroller: "body",
//     markers:true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2, //varies from 1-5 as smoothness increase
//     // pin: true
//   }
// });

// gsap.from(".page2 h1",{
//   opacity: 0,
//   duration: 2,
//   x: 500,
//   scrollTrigger:{
//     trigger: '.page2 h1',
//     scroller: "body",
//     markers: true,
//     start: "top 50%"
//   }
// });

// gsap.from(".page2 h2",{
//   opacity: 0,
//   duration: 2,
//   x: -500,
//   scrollTrigger:{
//     trigger: '.page2 h2',
//     scroller: "body",
//     markers: true,
//     start: "top 50%"
//   }
// });

gsap.to(".page2 h1",{
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: 'top 0%',
    end: 'top -100%',
    pin: true, //when we use pin we need to trigger it parents only
    scrub: 2
  }
})