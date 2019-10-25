var translateTitle = function (titleObj) {
  var page = document.documentElement;
  var lang = page.lang;
  var currentTitle = titleObj[lang];
  return currentTitle;
};

$( document ).ready(function() {
  $('.page-header__catalog-menu-wrapper').on('shown.bs.dropdown', function () {
    $('.main-content').addClass('main-content--overlayed');
  })
  $('.page-header__catalog-menu-wrapper').on('hidden.bs.dropdown', function () {
    $('.main-content').removeClass('main-content--overlayed');
  })
});

;(function() {
  // Initialize
  var bLazy = new Blazy({
    selector: '.b-lazy'
  });
})();

$(document).ready(function(){
  $('ul.sf-menu').superfish({
    animation: {height:'show'}, // slide-down effect without fade-in
    speed:     'fast',
    delay:     1000     // 1.2 second delay on mouseout default
  });
});

;(function(){
  // number mask for calc input
  var elements = document.querySelectorAll('.masked');
  var maskOptions = {
    mask: Number,
    // other options are optional with defaults below
    scale: 2,  // digits after point, 0 for integers
    signed: false,  // disallow negative
    thousandsSeparator: ' ',  // any single char
    padFractionalZeros: false,  // if true, then pads zeros at end to the length of scale
    normalizeZeros: true,  // appends or removes zeros at ends
    radix: ',',  // fractional delimiter
    mapToRadix: ['.'],  // symbols to process as radix
    min: 0,// number interval
    max: 10000
  };

  Array.prototype.forEach.call( elements, function (element) {
    var mask = IMask(element, maskOptions);
  });
}());
