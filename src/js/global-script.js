(function(){
  // code
}());

$( document ).ready(function() {
  $('.page-header__catalog-menu-wrapper').on('shown.bs.dropdown', function () {
    $('.main-content').addClass('main-content--overlayed');
  })
  $('.page-header__catalog-menu-wrapper').on('hidden.bs.dropdown', function () {
    $('.main-content').removeClass('main-content--overlayed');
  })
});

const translateTitle = function (titleObj) {
  let page = document.documentElement;
  let lang = page.lang;
  let currentTitle = titleObj[lang];
  return currentTitle;
};

;(function() {
  // Initialize
  var bLazy = new Blazy({
    selector: '.b-lazy'
  });
})();
