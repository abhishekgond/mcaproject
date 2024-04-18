// Loader Screen 

var loader = document.getElementsByClassName("preloader")[0];
var loadingDelay = 1000;  // 1000 ms

window.addEventListener("load",function()
{
    setTimeout(function(){
        loader.style.display = "none";
    }, loadingDelay);
   
});






// Slide Show

// let slideIndex = 0;
// const slides = document.querySelectorAll('.slider-item');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// function showSlide(index) {    // slide show logic
//     if (index < 0) {
//         slideIndex = slides.length - 1;
//     } else if (index >= slides.length) {
//         slideIndex = 0;
//     } else {
//         slideIndex = index;
//     }

//     for (let i = 0; i < slides.length; i++) {  // hide all slides
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex].style.display = "block";  // show only particular index slide
// }

// function prevSlide() {
//     showSlide(slideIndex - 1);
  
   
// }

// function nextSlide() {
//     showSlide(slideIndex + 1);
    
  
// }

// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// function autoSlide(index) {
//     nextSlide();
//     setTimeout(autoSlide, 5000); // Change image every 5 seconds
// }

// autoSlide();


let slideIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideTimer; // Variable to store the slide timer

function showSlide(index) {    // Slide show logic
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }

    for (let i = 0; i < slides.length; i++) {  // Hide all slides
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";  // Show only the particular index slide
}

function prevSlide() {
    showSlide(slideIndex - 1);
    resetTimer(); // Reset the timer when clicking the previous button
}

function nextSlide() {
    showSlide(slideIndex + 1);
    resetTimer(); // Reset the timer when clicking the next button
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function autoSlide() {
    nextSlide();
    slideTimer = setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

function resetTimer() {
    clearTimeout(slideTimer); // Clear the existing timer
    slideTimer = setTimeout(autoSlide, 5000); // Start a new timer after 5 seconds
}

autoSlide(); // Start the automatic slideshow


/////////////////////////////////////////////////////////////////////////////////////////

let swiperCards = new Swiper('.card__content', {
   
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 2000, // 2 seconds
        disableOnInteraction: false, // Keeps autoplay running even if the user interacts with the swiper
      },

      speed: 800,
  
   breakpoints: {
        1000:{
            slidesPerView: 3,
        },

        800:{
            slidesPerView: 2,
        },

        600:{
            slidesPerView: 1,
        } 
   },
  });


  var swiperTestnomials = new Swiper(".Testimonial_Container", {
    
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },

    loop: true,

    autoplay: {
        delay: 2000, // 2 seconds
        disableOnInteraction: false, // Keeps autoplay running even if the user interacts with the swiper
      },

      speed: 800,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
  });
