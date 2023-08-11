// header
$(function () {
  var e = $("body");
  $(window).scroll(function () {
      $(window).scrollTop() >= 1 ? e.removeClass("body").addClass("darkHeader") : e.removeClass("darkHeader").addClass("body");
  });
}),

// loder
  $(document).ready(function () {
      $(".lodder--wrapper").show(),
          $("body").addClass("loder"),
          setTimeout(function e() {
              $(".lodder--wrapper").hide(), $("body").removeClass("loder");
          }, 2000),
          $("body").addClass("loder");
  });


// header responsive

$(".mobile_nav").click(function() {

    var mm = $(".mobile_menu"),
        mn = $(".mobile_nav"),
      a = "active";
    
    if (mm.hasClass(a) && mn.hasClass(a)) {
      mm.removeClass(a).fadeOut(200);
      mn.removeClass(a);
      $('.mobile_menu li').each(function(){
        $(this).removeClass('slide');
      });
    } else {
      mm.addClass(a).fadeIn(200);
      mn.addClass(a);
      $('.mobile_menu li').each(function(i){
      var t = $(this);
      setTimeout(function(){ t.addClass('slide'); }, (i+1) * 100);
    });
    }
    
  });
  