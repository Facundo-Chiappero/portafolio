//-----beeg imgs-----//
var imgs = document.querySelectorAll(".project-img");
var modal = document.querySelector(".modal");
var modalImg = document.querySelector(".modal-img");

imgs.forEach(img => {
    img.addEventListener("click", (e) => {
        modal.classList.remove("hidden");
        modalImg.src = e.target.src;
    });
});

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalImg.src = "";
});


//-----scroll-----//
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        
        const headerH = document.querySelector('header').offsetHeight;
        const navH = document.querySelector('nav').offsetHeight;
        const hH = document.querySelector('h2').offsetHeight;
        var totalH = headerH + navH + hH;
        totalH *= -1;
        
        if (anchor.href.includes('#contact')) totalH=0
        
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        window.scrollBy({
            top: totalH,
            behavior: 'smooth'
        });
    });
});