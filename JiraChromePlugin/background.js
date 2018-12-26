
// Message Receiver to add a Badge Text with the number of Bloquant Jiras. 
chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    chrome.browserAction.setBadgeText({text:message.nbJiraBloquant});
    chrome.browserAction.setBadgeBackgroundColor({color:"red"})
});
