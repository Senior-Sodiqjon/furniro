// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}



$(document).ready(function () {

    $(".slick").slick({
        infinite: true,          // Cheksiz qaytish
        slidesToShow: 3,         // Ko'rsatilayotgan slaydlar soni
        slidesToScroll: 0,       // Qaytishda aylanadigan slaydlar soni
        speed: 200,              // Animatsiya tezligi (ms)
        autoplaySpeed: 4000,     // Avtomatik qaytishning tezligi (ms)
        centerMode: true,        // O'rtada joylashgan slayt rejimi
        centerPadding: "50px",      // O'rtadagi slaytning ichki bo'shligi
        dots: true,              // Slaytlar navigatsiyasi (nuqtalar)
    });
});


// Active bo'lmagan slaytlarning ichidagi rasmlarning o'lchamini o'zgartirish
$(".slick-slide:not(.slick-center) span img").css("width", "700px");

// Slayderda o'zgarishlarni qayta yuklash uchun
$(".slick").slick("refresh");




$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  $("video").click(function(){
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
    $("#myModal").modal();  
  });
  });//EOF Document.ready




  let currentPage = 1;

function changePage(page) {
  // Simulyatsiya uchun console.log
  console.log(`Sahifa o'zgartirildi: ${page}`);
  // Bu funksiya o'zgartirilgan sahifaga o'tish va kerakli ishlarni bajaradi
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    changePage(currentPage);
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  // O'zgartirilgan sahifaning miqdori
  const totalPages = 3; // Misol uchun 3

  if (currentPage < totalPages) {
    currentPage++;
    changePage(currentPage);
  }
});







$("#search-icon").click(function() {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$('.menu-toggle').click(function(){
   $(".nav").toggleClass("mobile-nav");
   $(this).toggleClass("is-active");
});














const modal = document.querySelector(".modal");
const dialog = document.createElement("dialog");
dialog.innerHTML = modal.innerHTML;
modal.replaceWith(dialog);

const openDialog = document.querySelector(".openmodal");
const cancelButton = document.querySelector(".cancel-button");

let isModalOpen = false;

// Modalni ochish
openDialog.addEventListener("click", () => {
dialog.showModal();
isModalOpen = true;
});

// Modalni yopish funksiyasi
function closeDialog() {
dialog.close();
isModalOpen = false;
}

// Chiqish tugmasini bosganda modalni yoping
cancelButton.addEventListener("click", () => {
if (isModalOpen) {
  closeDialog();
}
});

// Modalni tashqariga bosilganda yoki o'ng tomoniga bosilganda modalni yoping
dialog.addEventListener("click", (e) => {
if (isModalOpen) {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    closeDialog();
  } else if (e.clientX > dialogDimensions.right - 10 || window.innerWidth <= 1200) {
    closeDialog();
  }
}
});

// Oyna o'lchamini 1200 piksellikdan past bo'lsa modalni yoping
window.addEventListener("resize", () => {
if (window.innerWidth <= 1200) {
  closeDialog();
}
});

// Cacel rasim tugmasini bosganda modalni yoping
const cacelImg = document.querySelector(".cancel__img");
cacelImg.addEventListener("click", () => {
closeDialog();
});







  // Open modal menu
  $(".nav-toggler").click(function() {
    $(".modal-menu").fadeIn();
  });

  // Close modal menu
  $(".modal-menu").click(function() {
    $(this).fadeOut();
  });

  // Prevent closing modal when clicking on the menu itself
  $(".modal-menu ul").click(function(e) {
    e.stopPropagation();
  });




  $(document).ready(function() {
    let isMenuOpen = false;
  
    $(".menu-toggle").click(function() {
      isMenuOpen = !isMenuOpen; // Toggle the state
  
      if (isMenuOpen) {
        $(".navbar ul").css("left", "50%");
      } else {
        $(".navbar ul").css("left", "-50%");
      }
    });
  });
  