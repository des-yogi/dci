$(document).ready(function() {

  let title = {
    uk: 'Головне меню',
    ru: 'Главное меню',
    en: 'Main menu'
  };

  $('#main-menu').mmenu({
     'extensions': [
        'position-back',
        'position-right',
        'pagedim-black'
      ],
      navbar: {
        title: translateTitle(title)
      }
  }, {
      // configuration
      offCanvas: {
        clone: true,
        pageSelector: '#page'
     }
  });

  /*var API = $("#main-menu").data( "mmenu" );

  $(".page-header__main-menu-toggler").click(function() {
     API.open();
  });*/
});


