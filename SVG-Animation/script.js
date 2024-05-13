let initialPath = `M 10 100 Q 500 100 1500 100`;
let finalPath = `M 10 100 Q 500 100 1500 100`;

let string = document.querySelector('.string');

string.addEventListener("mousemove", function(dets){
  initialPath = `M 10 100 Q ${dets.x} ${dets.y} 1500 100`;

  gsap.to("svg path",{
    attr:{d:initialPath},
    duration: 0.2,
    ease: "power3.out"
  });
});

string.addEventListener("mouseleave", function(dets){
  gsap.to("svg path",{
    attr:{d:finalPath},
    duration: 1.5,
    ease: "elastic.out(1,0.2)"
  })
});
