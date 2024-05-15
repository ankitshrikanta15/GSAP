function breakTheText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");
  let halfValue = splittedText.length/2;

  let clutter = "";

  splittedText.forEach(function (e,i) {
    if(i<halfValue){
      clutter += `<span class="start">${e}</span>`;
      // console.log(e);
    } else {
      clutter += `<span class="end">${e}</span>`;
      // console.log("lol" +e);
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from(".start", {
  y: 70,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15
});

gsap.from(".end", {
  y: 70,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15
});

