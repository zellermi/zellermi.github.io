/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

/* AUTO-SCROLL GALLERY */
const gallery = document.getElementById("gallery");
let scrollAmount = 0;

setInterval(() => {
    scrollAmount += 1;
    if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
        scrollAmount = 0;
    }
    gallery.scrollLeft = scrollAmount;
}, 40);
