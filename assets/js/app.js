$('.slider2_container').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1530,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.slide_container').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: '.perv_arrow',
    nextArrow: '.nxt_arrow',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1245,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                dots: true
            }
        },
        {
            breakpoint: 869,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                autoplay: true,

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,

            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.small_container').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

window.onload = function () {
    setTimeout(function () {
        var loader = document.querySelector('.preloader-container');
        loader.classList.add("active_new");
        //  $('.preloader').addClass('active');
        // Display your page content after preloader animation completes
        // document.body.style.overflow = 'auto'; // Restore scrolling
    }, 4000); // Adjust the duration as needed

    // Apply animations to each span element with a delay
    const spans = document.querySelectorAll('.preloader-text span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.animation = ' expandWidth 1000s forwards, fadeOut 500s forwards'; // Add fade-out animation
        }, index * 200); // Adjust the delay between each letter's animation
    });
};

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}