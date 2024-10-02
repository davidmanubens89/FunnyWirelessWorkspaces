$(document).ready(function(){
  $('.banner').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      pauseOnHover: false,
      pauseOnFocus: false
  });
});

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}

