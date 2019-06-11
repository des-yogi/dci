$(document).ready(function() {

  let title = {
    uk: 'Каталог товарів',
    ru: 'Каталог товаров',
    en: 'Catalog'
  };

  $('#catalog-menu').mmenu({
     'extensions': [
        'pagedim-black'
      ],
      navbar: {
        add: true,
        title: translateTitle(title)
      }
  }, {
     // configuration
     offCanvas: {
        pageSelector: '#page'
     }
  });
});


