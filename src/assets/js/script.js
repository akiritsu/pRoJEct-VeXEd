/*JS FOR SCROLLING THE ROW OF THUMBNAILS*/ 
$(document).ready(function () {
  $('.vid-item').each(function(index){
    $(this).on('click', function(){
      var current_index = index+1;
      $('.vid-item .thumb').removeClass('active');
      $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
    });
  });
});

/*JS FOR CHANGE THE ROW OF THUMBNAILS*/ 
$(document).ready(function(){
  $('.videos video').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
      var src = $(this).attr('src');
      $('.main-video video').attr('src',src);
  });
});

/*JS FOR CHANGE THUMBNAILS SLIDER*/ 
  var imageno =1;
    displayimg(imageno);

  function nextimg(n){
    displayimg(imageno += n)
        }

  function currentSlide(n){
    displayimg(imageno = n)
        }

  function displayimg(n){
    var i;
    var image = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("dot");
    if(n > image.length){
    imageno = 1;
      }
    if(n < 1){
    imageno = image.length;
      }
    for(i=0; i < image.length; i++){
    image[i].style.display = "none";
      }
    for(i=0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
      }
    image[imageno - 1].style.display ="block";
    dots[imageno - 1].className += " active";
}
