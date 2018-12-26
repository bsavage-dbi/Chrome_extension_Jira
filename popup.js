// Function to open a Jira Dahsboard in a new tab.

document.addEventListener('DOMContentLoaded', function(){
  let link= document.getElementById("goToJira")
  link.addEventListener("click",openJira);
});

function openJira() {
  chrome.tabs.create({active: true, url: 'https://priceminister.atlassian.net/secure/RapidBoard.jspa?rapidView=101&view=planning.nodetail&selectedIssue=APP-57964'});
};
