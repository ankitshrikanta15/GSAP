function page1Animation(){
  let tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
  y: -30,
  opacity:0,
  duration: 0.7,
  delay: 1,
  stagger: 0.15
});

tl.from(".center-part1 h1",{
  x: -300,
  opacity: 0,
  duration: 0.5
});

tl.from(".center-part1 h4",{
  x: -100,
  opacity: 0,
  duration: 0.4
});

tl.from(".center-part1 button",{
  opacity: 0,
  duration: 0.4
});

tl.from(".center-part2 img",{
  opacity: 0,
  duration: 0.5
},"-=0.5");

tl.from(".section1-bottom img",{
  y: 30,
  opacity: 0,
  stagger: 0.15,
  duration: 0.5
});

}

page1Animation();

function page2Animation() {
  let tl2 = gsap.timeline({
    scrollTrigger:{
    trigger: ".section2",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 0",
    scrub: 2,
    }
});

tl2.from(".services h3",{
  x: 100,
  opacity: 0,
  duration: 0.5,
  });

  tl2.from(".elem.white.line1",{
    x: -200,
    opacity: 0,
    duration: 0.5
  },"first");

  tl2.from(".elem.black.line2",{
    x: 200,
    opacity: 0,
    duration: 0.5
  },"second");

  tl2.from(".elem.black.line3",{
    x: -200,
    opacity: 0,
    duration: 0.5
  },"second");

  tl2.from(".elem.white.line4",{
    x: 200,
    opacity: 0,
    duration: 0.5
  },"first");
}

page2Animation();