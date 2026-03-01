// Navbar background change on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


// Lightbox functionality
const images = document.querySelectorAll(".grid img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

images.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        const img = document.createElement("img");
        img.src = image.src;
        lightbox.innerHTML = "";
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});


// Smooth fade-in on scroll
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Initial section animation setup
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
});