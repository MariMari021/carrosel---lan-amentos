document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  swiper.on("slideChange", function () {
    var activeIndex = swiper.activeIndex;
    var contentItems = document.querySelectorAll('.content');
    
    // Oculta todos os elementos .content
    contentItems.forEach(function (content) {
      content.classList.remove('active'); // Remove a classe .active
    });

    // Exibe o elemento .content correspondente ao slide ativo
    contentItems[activeIndex].classList.add('active'); // Adiciona a classe .active
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   var swiper = new Swiper(".swiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true
//     },
//     spaceBetween: 60,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     },
//   });

//   swiper.on("slideChange", function () {
//     var activeIndex = swiper.activeIndex;
//     var contentItems = document.querySelectorAll('.content');
    
//     // Oculta todos os elementos .content
//     contentItems.forEach(function (content) {
//       content.style.display = 'none';
//     });

//     // Exibe o elemento .content correspondente ao slide ativo
//     contentItems[activeIndex].style.display = 'block';
//   });
// });








// var swiper = new Swiper(".swiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true
//   },
//   spaceBetween: 60,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   }
// });

