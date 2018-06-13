// (function() {
//   var carousel, next, prev, seats;

//   carousel = $('.carousel');

//   seats = $('.carousel-seat');

//   if(seats.length)

//   next = function(el) {
//     if (el.next().length > 0) {
//       return el.next();
//     } else {
//       return seats.first();
//     }
//   };

//   prev = function(el) {
//     if (el.prev().length > 0) {
//       return el.prev();
//     } else {
//       return seats.last();
//     }
//   };

//   $('.toggle').on('click', function(e) {
//     var el, i, j, new_seat, ref;
//     el = $('.is-ref').removeClass('is-ref');
//     if ($(e.currentTarget).data('toggle') === 'next') {
//       new_seat = next(el);
//       carousel.removeClass('is-reversing');
//     } else {
//       new_seat = prev(el);
//       carousel.addClass('is-reversing');
//     }
//     new_seat.addClass('is-ref').css('order', 1);
//     for (i = j = 2, ref = seats.length; (2 <= ref ? j <= ref : j >= ref); i = 2 <= ref ? ++j : --j) {
//       new_seat = next(new_seat).css('order', i);
//     }
//     carousel.removeClass('is-set');
//     return setTimeout((function() {
//       return carousel.addClass('is-set');
//     }), 50);
//   });

// }).call(this);


//   var carousel, next, prev, seats;

//   carousel = $('.carousel');

var carousel = $('.carousel');
var wrap = $('.wrap');
var timesleft = 0;

$('.toggle.right').on('click', function(e) {

  if ( $('.wrap').width() > 640) {

    var remainder = $('.carousel-seat').length % 5;
    var increments = Math.floor( $('.carousel-seat').length / 5);

    if( (timesleft + 1) < increments){
      ++timesleft;
      carousel.animate({left: - $('.carousel-seat').width() * ( 5 * timesleft) })
     
    }else if( (timesleft + 1) === increments && remainder > 0){
      carousel.animate({left: - $('.carousel-seat').width() * ( ( 5 * timesleft) + remainder)})
    }

  }else if( $('.wrap').width() < 640  && $('.wrap').width() > 560 ){
    var remainder = $('.carousel-seat').length % 3;
    var increments = Math.floor( $('.carousel-seat').length / 3);

    if( (timesleft + 1) < increments){
      ++timesleft;
      carousel.animate({left: - $('.carousel-seat').width() * ( 3 * timesleft) })
     
    }else if( (timesleft + 1) === increments && remainder > 0){
      carousel.animate({left: - $('.carousel-seat').width() * ( ( 3 * timesleft) + remainder)})
    }
  }else{

    var remainder = $('.carousel-seat').length % 2;
    var increments = Math.floor( $('.carousel-seat').length / 2);
    // console.log(timesleft)
    // console.log(increments)
    if( (timesleft + 1) < increments){
      ++timesleft;
      carousel.animate({left: - $('.carousel-seat').width() * ( 2 * timesleft) })
     
    }else if( (timesleft + 1) === increments && remainder > 0){
      carousel.animate({left: - $('.carousel-seat').width() * ( ( 2 * timesleft) + 1)})
    }
  }

})



$('.toggle.left').on('click', function(e) {

  if ( $('.wrap').width() > 640) {
     if(timesleft <= 1){
        carousel.animate({left: 0 })
        timesleft = 0;
     }else if (timesleft > 1){
      timesleft--;
      carousel.animate({left: - $('.carousel-seat').width() * ( 5 * timesleft) })
     }
  }else if( $('.wrap').width() < 640  && $('.wrap').width() > 560 ){
    // console.log(timesleft)
    if(timesleft <= 1){
        carousel.animate({left: 0 })
        timesleft = 0;
     }else if (timesleft > 1){
        // console.log(timesleft)
        timesleft--;
        carousel.animate({left: - $('.carousel-seat').width() * ( 3 * timesleft) })
     }
  }else{
     if(timesleft <= 1){
        carousel.animate({left: 0 })
        timesleft = 0;
     }else if (timesleft > 1){
        timesleft--;
        carousel.animate({left: - $('.carousel-seat').width() * ( 2 * timesleft) })
     }

  }


})


var resize = function(){

    carousel.animate({left: 0 })
    timesleft = 0;

}


window.onresize = resize



var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.js-expander').click(function() {

  var $thisCell = $(this).closest('.card');


    var offset = $thisCell.offset()
    var marginLeft = offset.left - 105;
    $thisCell.children('.card__expander').css({'margin-left': '-' + marginLeft + "px" })


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
