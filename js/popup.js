$(function () {
  var ext = chrome.extension.getBackgroundPage()

  // overwrite the console object with the right one.
  var optionsPage = (chrome.extension.getViews()
    && (chrome.extension.getViews().length > 1))
    ? chrome.extension.getViews()[1] : null;

  // safety precaution.
  if (optionsPage) {
    var console = optionsPage.console;
  }

  $('#cycle_tabs').on('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      ext.func.cycleTabs(tabs[0], 1000)
    });
  })

  $('#open_all').on('click', function () {
    chrome.tabs.executeScript(null, {file: "js/jquery.min.js"}, function () {
      chrome.tabs.executeScript(null, {file: "js/jquery.open-docs.js"})
    })
  })

  $('#print_all_tabs').on('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      ext.func.cycleTabs(tabs[0], 500, true)
    });
    // chrome.tabs.executeScript(null, {file: "js/print-tab.js"})
  })
})