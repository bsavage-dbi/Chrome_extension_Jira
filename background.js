
//  chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#0A3269'}, function() {
//     console.log("The color is green.");
//   });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'priceminister.atlassian.net'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    })
