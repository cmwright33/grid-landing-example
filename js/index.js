var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('is-collapsed')) {
    $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
    $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
    if ($cell.not($thisCell).hasClass('is-inactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('is-inactive');
    }

  } else {
    $thisCell.removeClass('is-expanded').addClass('is-collapsed');
    $cell.not($thisCell).removeClass('is-inactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('is-expanded').addClass('is-collapsed');
  $cell.not($thisCell).removeClass('is-inactive');

});


var $cards = $('.cards');
var $grouping = $('.groupings');

$grouping.on('click', function(){

  
  if ($thisCell.hasClass('are-collapsed') ){
    $thisCell.removeClass('are-collapsed')
  }else{
    $thisCell.addClass('are-collapsed')
  }


  console.log($thisCell)
})

// $cards.find('.js-expander').click(function() {

//   var $thisCell = $(this).closest('.cards');

//   if ($thisCell.hasClass('are-collapsed')) {
//     $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
//     $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
//     if ($cell.not($thisCell).hasClass('is-inactive')) {
//       //do nothing
//     } else {
//       $cell.not($thisCell).addClass('is-inactive');
//     }

//   } else {
//     $thisCell.removeClass('is-expanded').addClass('is-collapsed');
//     $cell.not($thisCell).removeClass('is-inactive');
//   }
// });



$(document).ready(function() {
  var triggerOpen   = $('#input');
  var triggerClose  = $('#dropdown-menu').find('li');
  var marka       = $('#icon');

  // set initial Marka icon
  // var m = new Marka('#icon');
  // m.set('triangle').size(10);
  // m.rotate('down');

  // trigger dropdown
    triggerOpen.add(marka).on('click', function(e) {
    e.preventDefault();
    $('#dropdown-menu').add(triggerOpen).toggleClass('open');


    // if($('#icon').hasClass("marka-icon-times")) {
    //   m.set('triangle').size(10);
    // } else {
    //   m.set('times').size(15);
    // }
  });

  triggerClose.on('click', function() {
    // set new placeholder for demo
    var options = $(this).find('a').html();
    triggerOpen.text(options);

    $('#dropdown-menu').add(triggerOpen).toggleClass('open');
    // m.set('triangle').size(10);

      $('.icon-open, .mini-menu, .menu-button').on('click', function() {   $('body').css('overflow', 'hidden'); $('.menu-sidebar').css('overflow', 'scroll') })
      $('.icon-close').on('click', function() {   $('body').css('overflow', ''); $('.menu-sidebar').css('overflow', '') })
  });




});



$(".js-carousel").each(function(){
  var $carousel = $(this),
    $carouselContainer = $carousel.find(".js-carousel-container"),
    $carouselList = $carousel.find(".cards"),
    $carouselItem = $carousel.find(".js-carousel-item"),
    $carouselButton = $carousel.find(".js-carousel-button"),
    setItemWidth = function(){
      $carouselList.removeAttr("style");
      console.log($($carouselItem[0]).outerWidth())
      var curWidth = ( $($carouselItem[0]).outerWidth() + 10 ) * $carouselItem.length;
      $carouselList.css("width", curWidth);
    },
    slide = function(){
      var $button = $(this),
        dir = $button.data("dir"),
        curPos = parseInt($carouselList.css("left")) || 0,
        moveto = 0,
        containerWidth = $carouselContainer.outerWidth(),
        listWidth = $carouselList.outerWidth(),
        before = (curPos + containerWidth),
        after = listWidth + (curPos - containerWidth);
      if(dir=="next"){
        moveto = (after < containerWidth) ? curPos - after : curPos - containerWidth;
      } else {
        moveto = (before >= 0) ? 0 : curPos + containerWidth;
      }
      
      
      $carouselList.animate({
        left: moveto
      });
    };
  $(window).resize(function(){
    setItemWidth();
  });
  setItemWidth();
  
  $carouselButton.on("click", slide);
});
