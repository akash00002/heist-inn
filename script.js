var swiper1 = new Swiper(".food-carousel", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    }
});

const cards = document.querySelectorAll('.swiper-slide');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        swiper1.autoplay.stop();
    });

    card.addEventListener('mouseleave', () => {
        swiper1.autoplay.start();
    });
});


let Indian = document.getElementsByClassName("menu-tab-name1")[0];
let Oriental = document.getElementsByClassName("menu-tab-name2")[0];
let Chinese = document.getElementsByClassName("menu-tab-name3")[0];
let Drinks = document.getElementsByClassName("menu-tab-name4")[0];

function resetStyles() {
    Indian.style.color = 'white';
    Indian.style.borderBottom = '0px';

    Oriental.style.color = 'white';
    Oriental.style.borderBottom = '0px';
    
    Chinese.style.color = 'white';
    Chinese.style.borderBottom = '0px';
    
    Drinks.style.color = 'white';
    Drinks.style.borderBottom = '0px';
}

function blinkCards() {
    const cards = document.querySelectorAll('.food-carousel');
    
    // Hide cards by setting opacity to 0
    cards.forEach(card => {
        card.style.opacity = '0';
    });

    // Show cards after a brief delay
    setTimeout(() => {
        cards.forEach(card => {
            card.style.opacity = '1';
        });
    }, 400); // Adjust the delay as needed for the desired blink effect
}


Indian.addEventListener("click", () => {
    resetStyles();
    Indian.style.color = 'red';
    Indian.style.borderBottom = '5px solid red';
    swiper1.slideTo(Math.floor(Math.random() * 6) + 1, 300);
    blinkCards();
});

Oriental.addEventListener("click", () => {
    resetStyles();
    Oriental.style.color = 'red';
    Oriental.style.borderBottom = '5px solid red';
    swiper1.slideTo(Math.floor(Math.random() * 6) + 1, 300);
    blinkCards();
});

Chinese.addEventListener("click", () => {
    resetStyles();
    Chinese.style.color = 'red';
    Chinese.style.borderBottom = '5px solid red';
    swiper1.slideTo(Math.floor(Math.random() * 6) + 1, 300);
    blinkCards();
});

Drinks.addEventListener("click", () => {
    resetStyles();
    Drinks.style.color = 'red';
    Drinks.style.borderBottom = '5px solid red';
});


let msgTextarea = document.getElementById("form-msg");
let msgLabel = document.getElementById("form-msg-label");

// Function to handle the behavior when clicking or focusing on the textarea
function handleTextareaClick() {
    msgLabel.style.color = "grey";
    msgLabel.style.fontSize = "16px";
    msgLabel.style.left = "34px";
    msgLabel.style.top = "27px";
}

msgTextarea.addEventListener("click", handleTextareaClick);

msgLabel.addEventListener("click", function () {
    msgTextarea.focus();
    handleTextareaClick();
});

// Add hover event listener to the label
msgLabel.addEventListener("mouseenter", function () {
    msgLabel.style.cursor = "text";
});

// Add hover event listener to the label
msgLabel.addEventListener("mouseleave", function () {
    msgLabel.style.cursor = "default";
});

// Add click event listener to the document body
document.body.addEventListener("click", function (event) {
    if (event.target !== msgTextarea && event.target !== msgLabel) {
        msgLabel.style.color = "";
        msgLabel.style.fontSize = "";
        msgLabel.style.left = "";
        msgLabel.style.top = "";
    }
});

function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now
    
    let formInputs = document.querySelectorAll('.book-table-form input[type="number"], .book-table-form input[type="tel"], .book-table-form input[type="datetime-local"], .book-table-form textarea');
    
    let validationMessages = document.getElementsByClassName("validation-message");
    
    let dateInput = document.getElementById("date");
    
    // Check if any input fields are empty
    let hasError = false;
    formInputs.forEach((input, index) => {
        if (input.value.trim() === '') {
            input.classList.add('error'); // Add error class to input
            input.classList.add('invalid-img');
            dateInput.style.padding = '10px 40px 10px 10px';
            dateInput.style.width = '180px';
            hasError = true;
            validationMessages[index].style.display = 'block';
        } else {
            input.classList.remove('error'); // Remove error class if input is not empty
            input.classList.remove('invalid-img');
            dateInput.style.padding = '10px';
            dateInput.style.width = '208px';
            validationMessages[index].style.display = 'none';
        }
    });
    
    // If there are errors, stop further execution
    if (hasError) return;
    
    // If no errors, proceed with form submission
    event.target.submit();
}



const dots = document.querySelectorAll('.dot');
const swiper2 = new Swiper('.review-carousel', {
    // your Swiper initialization options here
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    centeredSlides: true,
    fade: true,
    grabCursor: true,
    navigation: {
        nextEl: ".prev-btn",
        prevEl: ".next-btn",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
    },
});

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        swiper2.autoplay.stop();
    });

    card.addEventListener('mouseleave', () => {
        swiper2.autoplay.start();
    });
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        const cardIndex = parseInt(dot.getAttribute('data-index'));
        if (cardIndex === 1) {
            swiper2.slideTo(cardIndex+1); // slide to the selected card
        } else {
            swiper2.slideTo(swiper2.slides.length - 2); // slide to last card
        }
    });
});


var swiper3 = new Swiper(".sliding-images-container", {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    autoplayTimeout: 500,

});

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        swiper3.autoplay.stop();
    });

    card.addEventListener('mouseleave', () => {
        swiper3.autoplay.start();
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const offset = 105; // Adjust this value as needed
        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    });
});

const hamburger = document.querySelector(".hamburger");
const navContent = document.querySelector(".navContent");

hamburger.addEventListener('click', () => {
    if (navContent.classList.contains('show')) {
        navContent.style.height = '0'; // Hide navContent
        setTimeout(() => {
            navContent.classList.remove('show');
        }, 300); // Remove 'show' class after animation ends
    } else {
        navContent.classList.add('show');
        navContent.style.height = 'auto'; // Set height to auto to measure content height
        const contentHeight = navContent.scrollHeight + "px"; // Measure content height
        navContent.style.height = '0'; // Set height back to 0 to trigger animation
        setTimeout(() => {
            navContent.style.height = contentHeight; // Set height to measured content height
        }, 10); // Delay setting height to ensure animation is triggered
    }
});

