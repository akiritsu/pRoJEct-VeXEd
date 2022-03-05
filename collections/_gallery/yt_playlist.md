---
title: YOUTUBE PLAYLIST
category: Videos
comment: false
---

<!-- partial:index.partial.html -->
<div class="vid-main-wrapper clearfix">

<!-- THE YOUTUBE PLAYER -->
<div class="vid-container">
     <iframe id="vid_frame" src="https://www.youtube.com/embed/playlist?list=PL4zzNO1AFRUl8HhXpDFH8u-lIiqaBKuGT" frameborder="0" width="560" height="315"></iframe>
</div>

<!-- THE PLAYLIST -->
<div class="vid-list-container">
 <ol id="vid-list">
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/ua2_KMk0KBc?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/ua2_KMk0KBc/default.jpg" /></span>
      <div class="desc">Holy Qur'an Repeated™ القرآن الكريم مكرر</div>
      </a>
      </li>
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/9P7mEf4bilg?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/9P7mEf4bilg/default.jpg" /></span>
      <div class="desc">X-act Contour® Product Video</div>
      </a>
      </li>
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/KHxNpXovl58?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/KHxNpXovl58/default.jpg" /></span>
      <div class="desc">GearBox® Product Video</div>
      </a>
      </li>
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/D_a2UBGsePQ?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/D_a2UBGsePQ/default.jpg" /></span>
      <div class="desc">Mud Guards Product Video</div>
      </a>
      </li>
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/vYoh2IgoBXg?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/vYoh2IgoBXg/default.jpg" /></span>
      <div class="desc">Wheel Well Guards Product Video</div>
      </a>
      </li>
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/RTHI_uGyfTM?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/RTHI_uGyfTM/default.jpg" /></span>
      <div class="desc">Cargo Liner Product Video</div>
      </a>
      </li>
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/EvTjAjLNphE?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/EvTjAjLNphE/default.jpg" /></span>
      <div class="desc">Husky Liners Products</div>
      </a>
      </li>
      <li>
      <a href="javascript:void();" onClick="document.getElementById('vid_frame').src='https://youtube.com/embed/-Qpc79oaJQg?autoplay=1&rel=0&showinfo=0&autohide=1'">
      <span class="vid-thumb"><img width=72 src="https://img.youtube.com/vi/-Qpc79oaJQg/default.jpg" /></span>
      <div class="desc">Custom Molded Mud Guards</div>
      </a>
      </li>
</div>
  </div>   
<script>
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
             mage[i].style.display = "none";
            }

        for(i=0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(" active", "");
            }

            image[imageno - 1].style.display ="block";
            dots[imageno - 1].className += " active";
        }
</script>
