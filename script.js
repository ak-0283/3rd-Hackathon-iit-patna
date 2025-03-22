window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

document.getElementById("scrollToTopBtn").onclick = function () {
    // Smooth scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// Toggle mobile navigation menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});