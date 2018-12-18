  //let changeColor = document.getElementById('changeColor');
  //let mainText = document.getElementById('mainText')

//  chrome.storage.sync.get('color', function(data) {
  //  changeColor.style.backgroundColor = data.color;
  //  changeColor.setAttribute('value', data.color);
  //  mainText.style.backgroundColor = data.color;
  //  mainText.setAttribute('value', data.color);
//  });
document.addEventListener('DOMContentLoaded', function(){
 let link= document.getElementById("goToJira")
 link.addEventListener("click",openJira);
});
  function openJira() {
                  chrome.tabs.create({active: true, url: 'https://priceminister.atlassian.net/secure/RapidBoard.jspa?rapidView=101&view=planning.nodetail&selectedIssue=APP-57964'});
              };
