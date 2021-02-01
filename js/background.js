(function () {
  var _activeTabId
  var timer

  var func = {
    nextTab: function () {
      chrome.tabs.query({currentWindow: true}, function (tabs) {
        // Sort tabs according to their index in the window.
        // tabs.sort((a, b) => { return a.index - b.index; });
        let activeIndex = tabs.findIndex((tab) => { return tab.active; });
        let lastTab = tabs.length - 1;
        let newIndex = -1;

        newIndex = (activeIndex === lastTab) ? 0 : activeIndex + 1;
        if (newIndex === 0) {
          func.clearCycle()
          return false
        }
        chrome.tabs.update(tabs[newIndex].id, {active: true, highlighted: true})
        _activeTabId = tabs[newIndex].id;
      });
    },
    clearCycle: function () {
      clearInterval(timer)
    },
    cycleTabs: function (tab, interval, doPrint) {
      var index = 0
      timer = setInterval(function () {
        if (doPrint) {
          chrome.tabs.executeScript(_activeTabId, {code: 'setTimeout(function() { window.print() }, 1000)'})
        }
        func.nextTab()
      }, interval)
    }
  }

  window.func = func;
})()