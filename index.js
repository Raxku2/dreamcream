gsap.to("#marqueeScroller", {
  x: "-50%",
  ease: "none",
  duration: 42,
  repeat: -1,
});

const imagePaths = [
  "./assets/Hero_bg/01.png",
  "./assets/Hero_bg/02.png",
  "./assets/Hero_bg/03.png",
  "./assets/Hero_bg/04.png",
  "./assets/Hero_bg/05.png",
  "./assets/Hero_bg/06.png",
  "./assets/Hero_bg/07.png",
  "./assets/Hero_bg/08.png",
  "./assets/Hero_bg/09.png",
  "./assets/Hero_bg/10.png",
  "./assets/Hero_bg/11.png",
  "./assets/Hero_bg/12.png",
  "./assets/Hero_bg/13.png",
  "./assets/Hero_bg/14.png",
  "./assets/Hero_bg/15.png",
  "./assets/Hero_bg/16.png",
  "./assets/Hero_bg/17.png",
  "./assets/Hero_bg/18.png",
  "./assets/Hero_bg/19.png",
  "./assets/Hero_bg/20.png",
  "./assets/Hero_bg/21.png",
  "./assets/Hero_bg/22.png",
  "./assets/Hero_bg/23.png",
  "./assets/Hero_bg/24.png",
  "./assets/Hero_bg/25.png",
  "./assets/Hero_bg/26.png",
  "./assets/Hero_bg/27.png",
  "./assets/Hero_bg/28.png",
  "./assets/Hero_bg/29.png",
  "./assets/Hero_bg/30.png",
  "./assets/Hero_bg/31.png",
  "./assets/Hero_bg/32.png",
  "./assets/Hero_bg/33.png",
  "./assets/Hero_bg/34.png",
  "./assets/Hero_bg/35.png",
  "./assets/Hero_bg/36.png",
  "./assets/Hero_bg/37.png",
  "./assets/Hero_bg/38.png",
  "./assets/Hero_bg/39.png",
  "./assets/Hero_bg/40.png",
  "./assets/Hero_bg/41.png",
  "./assets/Hero_bg/42.png",
  "./assets/Hero_bg/43.png",
  "./assets/Hero_bg/44.png",
  "./assets/Hero_bg/45.png",
  "./assets/Hero_bg/46.png",
  "./assets/Hero_bg/47.png",
  "./assets/Hero_bg/48.png",
];

gsap.from("#landing_sec", {
  opacity: 0,
  duration: 0.8,
});

const images = [];
let imagesLoaded = 0;

imagePaths.forEach((src, index) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === imagePaths.length) {
      resizeCanvas();
      drawFrame(0); // Draw the very first frame immediately
      setupScrollAnimation(); // Set up the GSAP scroll logic
      console.log("ready and bound to scroll");
    }
  };
  images[index] = img;
});

const canvas = document.getElementById("sequenceCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;

  canvas.width = canvas.clientWidth * dpr;
  canvas.height = canvas.clientHeight * dpr;

  drawFrame(currentFrameIndex);
}

window.addEventListener("resize", resizeCanvas);

function drawFrame(index) {
  if (!images[index]) return;
  const img = images[index];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const scale = Math.max(canvas.width / img.width, canvas.height / img.height);

  const scaledWidth = img.width * scale;
  const scaledHeight = img.height * scale;

  const x = (canvas.width - scaledWidth) / 2;
  const y = (canvas.height - scaledHeight) / 2;

  ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
}

let currentFrameIndex = 0;

ScrollTrigger.normalizeScroll(true);
function setupScrollAnimation() {
  const playhead = { frame: 0 };

  gsap.to(playhead, {
    frame: images.length - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: "#landing_sec",
      scroller: "main",
      start: "top top",
      end: `+=${window.innerHeight * 1.1}`,
      scrub: 0.5,
      pin: true,

      pinType: "transform", // Forces GSAP to use CSS transforms for pinning inside a custom scroller
      anticipatePin: 1, // Prevents the initial jump/jitter when the pin starts
    },
    onUpdate: () => {
      drawFrame(playhead.frame);
    },
  });
}
