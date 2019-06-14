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
      },
      navbars: [
        {
          content: [ 'prev', 'breadcrumbs', 'close' ]
        }
      ]
  }, {
     // configuration
     offCanvas: {
        pageSelector: '#page'
     }
  });
});


