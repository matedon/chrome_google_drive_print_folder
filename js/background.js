(function () {
  var _activeTabId
  var timer

  var func = {
    nextTab: function (doPrint) {
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
        if (doPrint) {
          setTimeout(function () {
            chrome.tabs.executeScript(_activeTabId, {code: 'window.print();'})
          }, 10)
        }
      });
    },
    clearCycle: function () {
      clearInterval(timer)
    },
    cycleTabs: function (tab, interval, doPrint) {
      // alert(tab.id)
      timer = setInterval(function () {
        func.nextTab(doPrint)
      }, interval)
    }
  }

  window.func = func;
})()