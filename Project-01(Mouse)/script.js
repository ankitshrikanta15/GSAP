let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");
let image = document.querySelector(".image");

main.addEventListener("mousemove", function(dets){
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease:"back.out"
  });
});

image.addEventListener("mouseenter", function(dets){
  cursor.innerHTML = "view more";
  gsap.to(cursor, {
    scale: 1.5,
    backgroundColor: "#ffffff8a"
  });
});

image.addEventListener("mouseleave", function(dets){
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "aqua"
  });
});