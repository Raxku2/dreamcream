
gsap.to("#marqueeScroller", {
    x: "-50%",
    ease: 'none',
    duration: 42,
    repeat: -1

});



const imagePaths = [
    'https://ik.imagekit.io/rax/dreamCream/01.png?updatedAt=1787808960916',
    'https://ik.imagekit.io/rax/dreamCream/02.png?updatedAt=1787808976792',
    'https://ik.imagekit.io/rax/dreamCream/03.png?updatedAt=1787808975451',
    'https://ik.imagekit.io/rax/dreamCream/04.png?updatedAt=1787808950376',
    'https://ik.imagekit.io/rax/dreamCream/05.png?updatedAt=1787808972658',
    'https://ik.imagekit.io/rax/dreamCream/06.png?updatedAt=1787808962230',
    'https://ik.imagekit.io/rax/dreamCream/07.png?updatedAt=1787808975231',
    'https://ik.imagekit.io/rax/dreamCream/08.png?updatedAt=1787808975089',
    'https://ik.imagekit.io/rax/dreamCream/09.png?updatedAt=1787808935201',
    'https://ik.imagekit.io/rax/dreamCream/10.png?updatedAt=1787808973099',
    'https://ik.imagekit.io/rax/dreamCream/11.png?updatedAt=1787808961790',
    'https://ik.imagekit.io/rax/dreamCream/12.png?updatedAt=1787808974751',
    'https://ik.imagekit.io/rax/dreamCream/13.png?updatedAt=1787808965415',
    'https://ik.imagekit.io/rax/dreamCream/14.png?updatedAt=1787808975956',
    'https://ik.imagekit.io/rax/dreamCream/15.png?updatedAt=1787808950937',
    'https://ik.imagekit.io/rax/dreamCream/16.png?updatedAt=1787808973109',
    'https://ik.imagekit.io/rax/dreamCream/17.png?updatedAt=1787808937982',
    'https://ik.imagekit.io/rax/dreamCream/18.png?updatedAt=1787808972960',
    'https://ik.imagekit.io/rax/dreamCream/19.png?updatedAt=1787808964697',
    'https://ik.imagekit.io/rax/dreamCream/20.png?updatedAt=1787808937588',
    'https://ik.imagekit.io/rax/dreamCream/21.png?updatedAt=1787808976448',
    'https://ik.imagekit.io/rax/dreamCream/22.png?updatedAt=1787808977137',
    'https://ik.imagekit.io/rax/dreamCream/23.png?updatedAt=1787808911289',
    'https://ik.imagekit.io/rax/dreamCream/24.png?updatedAt=1787808942460',
    'https://ik.imagekit.io/rax/dreamCream/25.png?updatedAt=1787808966934',
    'https://ik.imagekit.io/rax/dreamCream/26.png?updatedAt=1787808967070',
    'https://ik.imagekit.io/rax/dreamCream/27.png?updatedAt=1787808967506',
    'https://ik.imagekit.io/rax/dreamCream/28.png?updatedAt=1787808973142',
    'https://ik.imagekit.io/rax/dreamCream/29.png?updatedAt=1787808972635',
    'https://ik.imagekit.io/rax/dreamCream/30.png?updatedAt=1787808966062',
    'https://ik.imagekit.io/rax/dreamCream/31.png?updatedAt=1787808963963',
    'https://ik.imagekit.io/rax/dreamCream/32.png?updatedAt=1787808944038',
    'https://ik.imagekit.io/rax/dreamCream/33.png?updatedAt=1787808977109',
    'https://ik.imagekit.io/rax/dreamCream/34.png?updatedAt=1787808936927',
    'https://ik.imagekit.io/rax/dreamCream/35.png?updatedAt=1787808963209',
    'https://ik.imagekit.io/rax/dreamCream/36.png?updatedAt=1787808971913',
    'https://ik.imagekit.io/rax/dreamCream/37.png?updatedAt=1787808966769',
    'https://ik.imagekit.io/rax/dreamCream/38.png?updatedAt=1787808942831',
    'https://ik.imagekit.io/rax/dreamCream/39.png?updatedAt=1787808959283',
    'https://ik.imagekit.io/rax/dreamCream/40.png?updatedAt=1787808974470',
    'https://ik.imagekit.io/rax/dreamCream/41.png?updatedAt=1787808934291',
    'https://ik.imagekit.io/rax/dreamCream/42.png?updatedAt=1787808963617',
    'https://ik.imagekit.io/rax/dreamCream/43.png?updatedAt=1787808966478',
    'https://ik.imagekit.io/rax/dreamCream/44.png?updatedAt=1787808947888',
    'https://ik.imagekit.io/rax/dreamCream/45.png?updatedAt=1787808974011',
    'https://ik.imagekit.io/rax/dreamCream/46.png?updatedAt=1787808961780',
    'https://ik.imagekit.io/rax/dreamCream/47.png?updatedAt=1787808975159',
    'https://ik.imagekit.io/rax/dreamCream/48.png?updatedAt=1787808965996',
];


const tagLine = new SplitText("#tagLine", { type: "words, chars" });
gsap.from(tagLine.chars, {
    opacity: 0.15,
    stagger: 0.3,
    scrollTrigger: {
        scroller: "main",
        start: "270% 70%",
        end: "270% 30%",
        scrub: true,
        // markers: true
    }
});

const brandMessage = new SplitText("#messageText", { type: "words, chars" });
gsap.from(brandMessage.chars, {
    opacity: 0.15,
    stagger: 0.3,
    scrollTrigger: {
        // markers: true,
        scroller: "main",
        start: "330% 80%",
        end: "330% 70%",
        scrub: true
    }
});




const images = [];
let imagesLoaded = 0;

// Load them all before animating
imagePaths.forEach((src, index) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === imagePaths.length) {
            // startAnimation(); // Start only when all 48 are ready
            resizeCanvas();
            drawFrame(0); // Draw the very first frame immediately
            setupScrollAnimation(); // Set up the GSAP scroll logic
            console.log('ready and bound to scroll');
        }
    };
    images[index] = img;
});




const canvas = document.getElementById('sequenceCanvas');
const ctx = canvas.getContext('2d');

// }
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;

    drawFrame(currentFrameIndex);
}

window.addEventListener('resize', resizeCanvas);


function drawFrame(index) {
    if (!images[index]) return;
    const img = images[index];

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
    );

    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;

    const x = (canvas.width - scaledWidth) / 2;
    const y = (canvas.height - scaledHeight) / 2;
    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
}

let currentFrameIndex = 0;

function setupScrollAnimation() {
    // 1. Create a dummy object to hold our frame value
    const playhead = { frame: 0 };

    // 2. Animate that frame value from 0 to 47
    gsap.to(playhead, {
        frame: images.length - 1,
        snap: "frame", // Forces the number to round to whole integers
        ease: "none",  // Linear progression
        scrollTrigger: {
            trigger: "#landing_sec", // The section holding your canvas
            scroller: "main", // Required because your <main> tag handles the scrolling
            start: "top top", // Starts when the top of the section hits the top of the viewport
            end: `+=${window.innerHeight * 1.7}`, // The user must scroll 3000px to finish the animation
            scrub: 0.5, // Adds a 0.5 second smoothing effect to the scroll
            pin: true, // Pins the canvas in place until the animation finishes
        },
        onUpdate: () => {
            // 3. Every time the scroll changes the frame number, redraw the canvas
            drawFrame(playhead.frame);
        }
    });
}

