$(document).ready(function() {
  $('#main-menu').mmenu({
     'extensions': [
        'position-back',
        'position-right',
        'pagedim-black'
      ],
      navbar: {
        title: 'Головне меню'
      }
  }, {
     // configuration
     offCanvas: {
        pageSelector: '#page'
     }
  });
});
