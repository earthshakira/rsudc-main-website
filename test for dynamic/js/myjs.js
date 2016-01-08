var active = 'home';
var activa = 'container';
var menudd=false;

/*--pageslider function--*/
function pageslider(div1,div2,wrapper,time){
  var d1=document.getElementById(div1);
  var d2=document.getElementById(div2);
  if(d1.offsetHeight<window.innerHeight)offsetTop=window.innerHeight;
  else offsetTop=d1.offsetHeight;
      $("#"+wrapper).css("overflow-y","hidden");
      d2.style.top=offsetTop+"px";
      $("#"+div2).css("display","block");
      $("#"+div1).animate({top:"-"+offsetTop+'px'},time,function(){
        $("#"+div1).css("display","none");
      });
      $("#"+div2).animate({top:'00px'},time,function(){
        $("#"+div1).css("display","none");
        $("#"+wrapper).css("overflow-y","auto");
      });
}
/*--pageslider function Ends--*/

/*--Sidebar Menu--*/
$('.box').click(function(){
  $(".modal").modal("hide");
  if(active==this.id){
    return;
  }
  $('#'+active).removeClass('mactive');
  pageslider("i"+active,"i"+this.id,1000,"playground");

  if(this.id=="curlm"){
    $('.gridcontainer').isotope({
      itemSelector: '.gridBox',
      layoutMode: 'masonry',
      filter: '.sem1',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: true
      }
    });
  }


  if(this.id=="ppl"){
    $('.ppl-gridcontainer').isotope({
      itemSelector: '.gridBox',
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
    });
  }


  if(this.id=="gal"){
    $('.gal-gridcontainer').isotope({
      itemSelector: '.gal-gridBox',
      layoutMode: 'masonry',
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
    });
  }

  if(this.id=="stdwrk"){
    $('.stdwrk-gridcontainer').isotope({
        itemSelector: '.gridBox',
        layoutMode: 'masonry',
        filter: '.2012sem1',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
  }
  $('#alm'+activa).addClass('hidden');
  $('#almcontainer').removeClass('hidden');
 
  $('.alumni-gridbox').click(function(){
      $('#almcontainer').addClass('hidden');
      $('#alm'+activa).addClass('hidden');
      $('#'+activa).removeClass('activa');
      activa = this.id;
      $('#alm'+activa).removeClass('hidden');
      $('#'+activa).addClass('activa');
  });

  if(this.id=="alumni"){
    $('.alumni-gridcontainer').isotope({
     itemSelector: '.alumni-gridbox',
     layoutMode: 'masonry',
     filter: '.sem1',
     animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false
     }
    });
  }
  
  active = this.id;
  $('#'+active).addClass('mactive');
});
/*--Sidebar Menu Ends--*/

/*--Topbar Menu Button--*/
$('.menu-collapse').click(function(){
  menudd=!menudd;
  if(menudd)
    $("#collapsemenu").slideDown();
  else {
    $("#collapsemenu").slideUp();
  }
});
/*--Topbar Menu Button Ends--*/

/*--Curriculam Modal--*/
$('.gridBox').click(function(){
  $('#myModal .modal-dialog').css("top",($(".gridBox").offset().top-30)+"px");
   $('#myModal').css('visibility','visible');
});
/*--Curriculam modal Ends--*/

$('document').ready(function(){

  var rsudcactive="rsudc-institution-text";
  $(".rsudc-primary").click(function(){
     if($(this).attr("data-filter")==rsudcactive)
     {
       return;
     }
     else{
      $("#"+rsudcactive).addClass("hidden");
      rsudcactive=$(this).attr("data-filter");
      $("#"+rsudcactive).removeClass("hidden");
     }
  });

  $(".box").click(function(){
    if(menudd==true){
      menudd=!menudd;
      $("#collapsemenu").slideUp();
    }
  });

  $(".gal-gridBox").hover(function(){
    $(".gal-gridBox").css("-webkit-filter","grayscale(100%)");
    $(".gal-gridBox").css("-moz-filter","grayscale(100%)");
    $(".gal-gridBox").css("-ms-filter","grayscale(100%)");
    $(".gal-gridBox").css("-ms-filter","grayscale(100%)");
    $(".gal-gridBox").css("filter","grayscale(100%)");
    $(this).css("-webkit-filter","grayscale(0%)");
    $(this).css("-moz-filter","grayscale(0%)");
    $(this).css("-ms-filter","grayscale(0%)");
    $(this).css("-ms-filter","grayscale(0%)");
    $(this).css("filter","grayscale(0%)");
  },function(){
    $(".gal-gridBox").css("-webkit-filter","grayscale(0%)");
    $(".gal-gridBox").css("-moz-filter","grayscale(0%)");
    $(".gal-gridBox").css("-ms-filter","grayscale(0%)");
    $(".gal-gridBox").css("-ms-filter","grayscale(0%)");
    $(".gal-gridBox").css("filter","grayscale(0%)");
  });
  /* gallery modal */
  $("#modal-carousel").carousel({interval:false});

  $("#modal-carousel").on("slid.bs.carousel",function(){
       $(".modal-title")
       .html($(this)
       .find(".active img")
       .attr("title"));
  });

  $(".gal-gridBox").click(function(){
   var content = $("#modal-carousel .carousel-inner");
   var title = $(".modal-title");

   content.empty();
   title.empty();

   var id = this.id;
    var repo = $("#img-repo .item");
    var repoCopy = repo.filter("#" + id).clone();
    var active = repoCopy.first();

   active.addClass("active");
   title.html(active.find("img").attr("title"));
   content.append(repoCopy);

   $("#modal-gallery").modal("show");
 });
 /* gallery modal ends */

 /* Curriculam isotope */
 var $container = $('.gridcontainer');
 $('.gridcontainer').isotope({
     itemSelector: '.gridBox',
     layoutMode: 'masonry',
     filter: '.sem1',
     animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false
     }
 });

 $('.group a').click(function(){
     $('.group .current').removeClass('current');
     $(this).addClass('current');
     var selector = $(this).attr('data-filter');
     $container.isotope({
         itemSelector: '.gridBox',
         layoutMode: 'masonry',
         filter: selector,
         animationOptions: {
             duration: 750,
             easing: 'linear',
             queue: false
         }
      });
      return false;
 });
 /* Curriculam isotope Ends */

 /* People Isotope */
 $(window).load(function(){
    var $pplContainer = $('.ppl-gridcontainer');
    $container.isotope({
        itemSelector: '.gridBox',
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.ppl-group a').click(function(){
        $('.ppl-group .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $pplContainer.isotope({
            itemSelector: '.gridBox',
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});
/* People Isotope ends */

 /* Gallery isotope */
 var $galContainer = $('.gal-gridcontainer');
 $('.gal-gridcontainer').isotope({
     itemSelector: '.gal-gridBox',
     layoutMode: 'masonry',
     filter: '*',
     animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false
     }
 });

 $('.gal-group a').click(function(){
     $('.gal-group .gal-current').removeClass('gal-current');
     $(this).addClass('gal-current');
     var selector = $(this).attr('data-filter');
     $galContainer.isotope({
         itemSelector: '.gridBox',
         layoutMode: 'masonry',
         filter: selector,
         animationOptions: {
             duration: 750,
             easing: 'linear',
             queue: false
         }
      });
      return false;
 });
 /* Gallery isotope Ends */

 /* Student Work isotope */
 var $stdContainer = $('.stdwrk-gridcontainer');
 $('.stdwrk-gridcontainer').isotope({
     itemSelector: '.gridBox',
     layoutMode: 'masonry',
     filter: '*',
     animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false
     }
 });

 $('.stdwrk-year-group a').click(function(){
   $('.stdwrk-year-group .current').removeClass('current');
   $(this).addClass('current');
   var x=$('.stdwrk-sem-group .current');
   $('.stdwrk-sem-group .current').removeClass('current');
   $(x).parent().parent().children().first().children('a').addClass("current");
   var selector = $(this).attr('data-filter')+"sem1";
       {
         $stdContainer.isotope({
             itemSelector: '.gridBox',
             layoutMode: 'masonry',
             filter: selector,
             animationOptions: {
                 duration: 750,
                 easing: 'linear',
                 queue: false
             }
          });
        }
      return false;
 });

 $('.stdwrk-sem-group a').click(function(){
     $('.stdwrk-sem-group .current').removeClass('current');
     $(this).addClass('current');
     var selector =$(".stdwrk-year-group .current").attr("data-filter")+$(this).attr('data-filter').substring(1);
     $stdContainer.isotope({
         itemSelector: '.gridBox',
         layoutMode: 'masonry',
         filter: selector,
         animationOptions: {
             duration: 750,
             easing: 'linear',
             queue: false
         }
      });
      return false;
 });
 /* Student Work isotope Ends */

 /* Alumni isotope */
 var $alumniContainer = $('.alumni-gridcontainer');
 $('.alumni-gridcontainer').isotope({
     itemSelector: '.alumni-gridbox',
     layoutMode: 'masonry',
     filter: '.sem1',
     animationOptions: {
         duration: 750,
         easing: 'linear',
         queue: false
     }
 });

 $('.alumni-group a').click(function(){
     $('.alumni-group .current').removeClass('current');
     $('#alm'+activa).addClass('hidden');
     $('#almcontainer').removeClass('hidden');
     
     $('.alumni-gridbox').click(function(){
        $('#almcontainer').addClass('hidden');
        $('#alm'+activa).addClass('hidden');
        $('#'+activa).removeClass('activa');
        activa = this.id;
        $('#alm'+activa).removeClass('hidden');
        $('#'+activa).addClass('activa');
      });
     $(this).addClass('current');
     var selector = $(this).attr('data-filter');
     $alumniContainer.isotope({
         itemSelector: '.alumni-gridbox',
         layoutMode: 'masonry',
         filter: selector,
         animationOptions: {
             duration: 750,
             easing: 'linear',
             queue: false
         }
      });
      return false;
 });
 /* Alumni isotope Ends */
 $('.alumni-gridbox').click(function(){
      $('#alm'+activa).addClass('hidden');
      $('#'+activa).removeClass('activa');
      activa = this.id;
      $('#alm'+activa).removeClass('hidden');
      $('#'+activa).addClass('activa');
  });
});


