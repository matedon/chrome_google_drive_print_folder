$(function () {
  var $parent = $html = $('html')
  var lang = $html.prop('lang')
  if (window.dics_files && lang) {
    var word_files =  $.grep(window.dics_files, function(v) {
      return v.symbol === lang
    })[0]
    $parent2 = $('[aria-hidden="true"]').filter(function () {
      return $(this).text().toUpperCase() == word_files.text.toUpperCase()
    }).next('c-wiz:visible')
    if ($parent2.length) {
      $parent = $parent2
    } else {
      console.error("Folder's root can not be found by current language (" + lang + ").")
    }
  }

  function openInNewTab (href) {
    Object.assign(document.createElement('a'), {
      target: '_blank',
      href: href,
    }).click()
  }

  $parent.find('[data-target="doc"]').filter(':visible').each(function (index) {
    var $self = $(this)
    var data = $self.data()
    var url = 'https://drive.google.com/open?id=' + data.id;
    console.info($self.text())
    console.info(index)
    setTimeout(function () {
      openInNewTab(url)
    }, index * 100)
  })
})