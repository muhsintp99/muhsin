let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// FF


$(document).ready(function() {

  let $slider = $(".FFslider");
  let sliderItem = $slider.children(".FFitem.FFactive");
  let i = $slider.children(".FFitem");
  let ind = 0;
  
  $slider
    .children(".FFitem")
    .each(function() {
      $(this).attr("data-index", ind++);
    });
    
  i.on("click", function(e) {
    const that = $(this);
    let dataIndex = that.data("index");
    $(".FFitem").removeClass("FFactive");
    that.addClass("FFactive");
  });

});