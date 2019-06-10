$(document).ready(function() {
  $('#catalog-menu').mmenu({
     'extensions': [
        'pagedim-black'
      ],
      navbar: {
        add: true,
        title: 'Каталог товарів'
      }
  }, {
     // configuration
     offCanvas: {
        pageSelector: '#page'
     }
  });
});
