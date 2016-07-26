



hljs.initHighlightingOnLoad();

jQuery(function(){
  $(document.body).scrollspy({target: '.sidebar', offset: $('.navbar').outerHeight(true)});
  var $sideBar = $('.single-page .sidebar');
  $sideBar.affix({
    offset: {
      top: function () { return this.top = $sideBar.offset().top - $('.docs-nav').height() - 30 }
    }
  })
});

