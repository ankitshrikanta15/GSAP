// gsap.to('.box1',{
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: 'blue',
//   borderRadius: '50%',
//   // scale: 1.5

// });

// gsap.from('.box2',{
//   x: 500,
//   y: 100,
//   duration: 2,
//   delay: 1,
// });

// gsap.from('h1',{
//   opacity: 0,
//   duration: 1,
//   y: 30,
//   delay: 1,
//   stagger: 0.3 // ek ek karke chalayega har ek h1 ko in 1s of interval
// })

// gsap.to('.box',{
//   x: 1000,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: 1, // if -1 it will run infinite
//   yoyo: true
// });

//timeline

// let tl = gsap.timeline();

// tl.to('.box1',{
//   x: 1000,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1
// });

// tl.to('.box2',{
//   x: 1000,
//   backgroundColor: 'blue',
//   duration: 1.5,
// });

// tl.to('.box3',{
//   x:1000,
//   borderRadius: "50%",
//   scale: 0.5,
//   duration: 1.5,
// })

let tl = gsap.timeline();

tl.from('h2',{
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
})

tl.from('h4',{
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

tl.from('h1',{
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2
})