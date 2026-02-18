document.addEventListener("DOMContentLoaded", function () {

    const heroImages = document.querySelectorAll(".hero img");
    heroImages.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
        });

        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
           const darkToggle = document.getElementById('toggleDark');

    darkToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');

       
        if(document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    });

   
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(24, 41, 170, 0.85)";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });


    let count = 0;
    const cartBtn = document.getElementById("cartBtn");
    cartBtn.addEventListener("click", function (e) {
        e.preventDefault();
        count++;
        cartBtn.textContent = `ADD TO CART (${count})`;
    });


    const shopBtn = document.getElementById("shopBtn");
    shopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("collection").scrollIntoView({
            behavior: "smooth"
        });
    });

    const toggle = document.getElementById("menuToggle");
    const navLeft = document.querySelector(".nav-left");
    const navRight = document.querySelector(".nav-right");

    toggle.addEventListener("click", () => {
        navLeft.classList.toggle("show");
        navRight.classList.toggle("show");
    });

});
