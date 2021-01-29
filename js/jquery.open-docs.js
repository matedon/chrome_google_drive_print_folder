$(function () {
  $('[data-target="doc"]').filter(':visible').each(function () {
    var $self = $(this)
    var data = $self.data()
    var url = 'https://drive.google.com/open?id=' + data.id;
    console.info($self.text())
    console.info(url)
    window.open(url)
  })
})