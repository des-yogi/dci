$( document ).ready(function() {

  var itemCol = document.querySelectorAll('.brands-item-col'); //brands-item-col--fullwidth
  var itemView = document.querySelectorAll('.product-card'); //product-card--row-style
  //filter-controls-block__display
  var btnContainer = document.querySelector('.filter-controls-block__display');
  var btns = document.querySelectorAll('.filter-controls-block__btn-view');

  var listView = function () {
    Array.prototype.forEach.call(itemCol, function (item) {
       item.classList.add('brands-item-col--fullwidth');
    });
    Array.prototype.forEach.call(itemView, function (view) {
       view.classList.add('product-card--row-style');
    });
  };

  var cardView = function () {
    Array.prototype.forEach.call(itemCol, function (item) {
       item.classList.remove('brands-item-col--fullwidth');
    });
    Array.prototype.forEach.call(itemView, function (view) {
       view.classList.remove('product-card--row-style');
    });
  };

  var btnClickHandler = function (e) {

    Array.prototype.forEach.call(btns, function (btn) {
      if (btn === e.target) {
        btn.classList.add('filter-controls-block__btn-view--selected');
      } else {
          btn.classList.remove('filter-controls-block__btn-view--selected');
      }
    });

    if ( this.classList.contains('btn-list-view') ) {
      listView();
    } else {
        cardView();
    }
  };

  Array.prototype.forEach.call(btns, function (btn) {
    if (btn) {
      btn.addEventListener('click', btnClickHandler);
    }
  });
});

