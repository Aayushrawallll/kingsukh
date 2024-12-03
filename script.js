/** Nav Animation */
var tlMain = gsap.timeline();

// Animate navigation bar
tlMain.from(".menu h5", {
    y: -30,
    opacity: 0,
    duration: 0.5, // Reduced duration for faster animation
    stagger: 0.3 // Reduced stagger for quicker appearance
});

// Animate h1 text
function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");
    var halfValue = splittedText.length / 2;

    var clutter = "";
    splittedText.forEach(function (elem, idx) {
        if (idx < halfValue) {
            clutter += `<span class="a">${elem}</span>`;
        } else {
            clutter += `<span class="b">${elem}</span>`;
        }
    });
    h1.innerHTML = clutter;
}

breakTheText();

tlMain.from("h1 .a", {
    y: 80,
    opacity: 0,
    duration: 0.7, // Reduced duration for faster animation
    stagger: 0.1 // Reduced stagger for quicker appearance
})
.from("h1 .b", {
    y: 80,
    opacity: 0,
    duration: 0.7,
    stagger: -0.1
}, "-=0.2"); // Overlap the animation for smooth transition

// Animate h2 text
tlMain.from("h2", {
    y: 30,
    scale: 0,
    opacity: 0,
    duration: 0.7, // Slightly faster animation
    ease: "power3.out"
}, "+=0.3"); // Slight delay for smooth flow

// Animate h4 text
tlMain.from("h4", {
    y: 30,
    scale: 0,
    opacity: 0,
    duration: 0.8, // Faster animation
    ease: "power3.out"
}, "+=0.2"); // Slight delay after h2

// Animate Book Now button
tlMain.from(".book-now", {
    opacity: 0,
    scale: 0.5,
    duration: 0.7, // Reduced duration for quicker bounce
    ease: "back.out(1.7)"
}, "+=0.3"); // Delay after h4


const marqueeContent = document.querySelector('.marquee-content');
const marqueeItems = document.querySelectorAll('.marquee-content span');

// Clone items for infinite scroll
marqueeItems.forEach(item => {
    const clone = item.cloneNode(true);
    marqueeContent.appendChild(clone);
});

function animateMarquee() {
    const totalWidth = marqueeContent.scrollWidth; // Total width of the content
    const viewportWidth = marqueeContent.parentElement.clientWidth; // Visible width of the marquee
    const speed = 50; // Adjust speed in pixels per second

    let offset = 0;

    function scroll() {
        offset -= 1; // Change this value to adjust the speed
        if (Math.abs(offset) >= totalWidth / 2) {
            offset = 0; // Reset offset for seamless animation
        }
        marqueeContent.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(scroll);
    }

    scroll();
}

// Start animation
animateMarquee();



// Animate About Page Section
gsap.from(".about h1", {
    scale: 0,
    opacity: 0,
    duration: 2,
    y: 20,
    scrollTrigger: {
        trigger: ".about", // Trigger the animation when the About section comes into view
        start: "top center", // Start animation when the top of ".about" hits the center of the viewport
        end: "bottom center", // End animation as the bottom of ".about" hits the center of the viewport
        scroller: "body", // Specify the scroller (default is "body")
    }
});


// Text reveal animation for the "About" section paragraph
gsap.from(".about .lead", {
    y: 80, // Move the text from 50px below its original position
    opacity: 0, // Start with full transparency
    duration: 3, // Time taken for the animation to complete
    ease: "power3.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".about", // Trigger the animation when the ".about" section enters the viewport
        start: "top 80%", // Start the animation when the top of the ".about" section is 80% down the viewport
        end: "top 40%", // End the animation when the top of the ".about" section reaches 40% down the viewport
        scroller: "body",
        //toggleActions: "play none none none", // Play the animation only once when it starts
    }
});

// Image reveal animation for the "About" section
gsap.from(".about img", {
    y: -150, // Start 150px to the top
    opacity: 0, // Start fully transparent
    duration: 2.5, // Time for the animation
    ease: "power3.out", // Smooth easing effect
    scrollTrigger: {
        trigger: ".about", // Trigger animation when ".about" section enters the viewport
        start: "top 80%", // Start animation when the top of ".about" is 80% down the viewport
        end: "top 40%", // End animation when the top of ".about" is 40% down the viewport
        toggleActions: "play none none none", // Play animation only once
    }
});

// Animate Services Page Section
gsap.from("#services h1", {
    scale: 0,
    opacity: 0,
    duration: 2,
    y: 20,
    scrollTrigger: {
        trigger: "#services", // Trigger the animation when the About section comes into view
        start: "top center", // Start animation when the top of ".about" hits the center of the viewport
        end: "bottom center", // End animation as the bottom of ".about" hits the center of the viewport
        scroller: "body", // Specify the scroller (default is "body")
    }
});

// Function to animate the counters
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");
let activated  = false;
 window.addEventListener("scroll", () => {
    if(
        pageYOffset > container.offsetTop - container.offsetHeight - 200
        && activated === false
    ) {
        counters.forEach(counter => {
            counter.innerText = 0;
            let count = 0;
            function updateCount() {
                const target = parseInt(counter.dataset.count);
                if(count < target) {
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
            activated = true;
        });

    } else if(
        pageYOffset < container.offsetTop - container.offsetHeight - 500
        || pageYOffset === 0
        && activated === true 
    ){
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
 })

// Animate Rooms Page Section
gsap.from("#rooms h1", {
    scale: 0,
    opacity: 0,
    duration: 2,
    y: 20,
    scrollTrigger: {
        trigger: "#rooms", // Trigger the animation when the About section comes into view
        start: "top center", // Start animation when the top of ".about" hits the center of the viewport
        end: "bottom center", // End animation as the bottom of ".about" hits the center of the viewport
        scroller: "body", // Specify the scroller (default is "body")
    }
});

// Animate Book Now button
gsap.from(".book", {
    opacity: 0,
    scale: 0,
    duration: 8, // Adjusted duration for smoother animation
    ease: "back.out(1.7)", // Smooth bounce effect
    scrollTrigger: {
        trigger: "#rooms", // Trigger animation when the #rooms section enters view
        start: "top center", // Start animation when the top of #rooms hits the center of the viewport
        end: "top 80%", // End animation when the top of #rooms is at 80% down the viewport
        toggleActions: "play none none none", // Play the animation only once
        scroller: "body", // Specify the scroller (default is "body")
    }
});

// Scroll animation with reset on scroll
gsap.utils.toArray(".gallery-item").forEach(item => {
    gsap.fromTo(item,
        { opacity: 0, y: 50, boxShadow: '0 0 0 rgba(0, 0, 0, 0)' },
        {
            opacity: 1,
            y: 0,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            duration: 1,
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reset"
            }
        }
    );
});

// Hover animation effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            y: -10,
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
            duration: 0.3
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            y: 0,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            duration: 0.3
        });
    });
});


