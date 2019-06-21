(function () {
  Array.prototype.forEach.call( document.querySelectorAll('.main-slider__title > a'), function(title) {
    var titleArr = title.innerText.split(' ');
    var newArr =  titleArr.map(function(el, idx) {
      if (idx === 0 || (idx % 2 === 0) ) {
        return el.innerHTML = '<span class="main-slider__decor-item">' + el + '</span>';
      } else return el;
    }).join(' ');
    title.innerHTML = newArr;
      //console.log( typeof(title.innerHTML) );
  });
})();
