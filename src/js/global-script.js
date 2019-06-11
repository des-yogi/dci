(function(){
  // code
}());

$( document ).ready(function() {

});

const translateTitle = function (titleObj) {
  let page = document.documentElement;
  let lang = page.lang;
  let currentTitle = titleObj[lang];
  return currentTitle;
};
