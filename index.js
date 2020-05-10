function scrollFunction() {

if (window.scrollY <= 100){
    $(".main-nav").css("background","transparent").fadeOut()
} else{
  $(".main-nav").css("background","black").fadeIn();
}
}

window.onscroll = scrollFunction;
// $(document).ready(function(){
    
//     $(window).scroll(function() {
//         var windowBottom = $(this).scrollTop()+500 + $(this).innerHeight();
//         $(".fade").each(function() {
//           /* Check the location of each desired element */
//           var objectBottom = ($(this).offset().top) + $(this).outerHeight();
          
//           /* If the element is completely within bounds of the window, fade it in */
//           if (objectBottom < windowBottom) { //object comes into view (scrolling down)
//             if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//           } else { //object goes out of view (scrolling up)
//             if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//           }
//         });
//       }).scroll();
// 	$('#nav-icon4').click(function(){
//         $(this).toggleClass('open');
//         $(".nav-content").toggleClass("display-none")
// 	});
// });
function myFunction(x) {
    x.classList.toggle("change");
    nav = document.getElementsByClassName("nav-content");
    console.log("nice2" );
    nav[0].style.display="none";
    if (x.classList.toggle("change") == false){
        nav = document.getElementsByClassName("nav-content");
        console.log("nice1" );
        nav[0].style.display="flex";
    } else{
        nav = document.getElementsByClassName("nav-content");
        console.log("nice2" );
        nav[0].style.display="none";
    }
  }

  $(window).on("load",function() {
     //invoke scroll-handler on page-load
     var vid = document.getElementsByClassName("video1");

function playVid() {
    vid.play();
}
playVid() 
  });