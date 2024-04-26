var swiper = new Swiper(".second-swiper", {
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




const heartbtns = document.querySelectorAll('.fa-heart');
console.log(heartbtns);
heartbtns.forEach(function(heartbtn) {
  heartbtn.addEventListener('click', function() {
    console.log('하트클릭')
    heartbtn.classList.toggle('active');
  });
});
