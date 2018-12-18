console.log("Le plugin Jira Chrome est opérationnel");
let templateJira = '{panel:title=Description|titleBGColor=#1F4591 |borderColor=#1F4591 |titleColor=#FFFFFF} \n {panel}\n{panel:title=Business Rules|titleBGColor=#1F4591 |borderColor=#1F4591 |titleColor=#FFFFFF}\n{panel}</p>'

// Message annoncant que le plugin est bien lancé.

let text = '<p style="color:#0A3269; margin-right:20px"> <b> Vous utilisez actuellement le plugin Jira Chrome<b/><p/>';
document.getElementById('breadcrumbs-container').innerHTML= text;

let isJiraCreation = document.getElementById('create-issue-dialog');

let inProgress = document.getElementsByClassName('ghx-in-progress')[0].innerText;
let notStarted = document.getElementsByClassName('ghx-not-started')[0].innerText;
let done = document.getElementsByClassName('ghx-done')[0].innerText;

let totalComplexity = Number(inProgress) + Number(notStarted) + Number(done);

// Code permettant d'afficher la complexité d'un sprint sur la page de bienvenue du dashboard JIRA:

const complexityText = `<p> Sprint Complexity is ${totalComplexity} points </p>`;
document.getElementsByClassName('ghx-issue-count')[0].innerHTML= complexityText;

if (Number(notStarted) == 0) {
  function displayCongrats(){
      const congratsText = '<p style="font-size:14px, color:#0A3269"> Félicitations !! Toutes les tâches sont commencées ;) </p>';
      document.getElementsByClassName('ghx-assigned-work-stats').after(congratsText);
      };
   displayCongrats();
 };

// Code permettant d'afficher la complexité d'un JIRA sur un déjà déjà crée:

let isJiraCreated = document.getElementById("releases-panel-container");

if (isJiraCreated != undefined){
  let complexity = document.getElementsByClassName("sc-cTSLtG gDoBIS")[2].innerText
  const myComplexity = ` <p> <b> Complexité </b> ${complexity} </p>`
  isJiraCreated.insertAdjacentHTML("afterend",myComplexity);
}







//let scrollButton = document.createElement('button');
//scrollButton.setAttribute("id","myBtn");
//scrollButton.setAttribute("title","Go to Top");
//scrollButton.onclick = topFunction()
//scrollButton.innerHTML="Top"

//
//function scrollFunction() {
//  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//  } else {
//  }
//
// When the user clicks on the button, scroll to the top of the document
//function topFunction() {
//  document.body.scrollTop = 0; // For Safari
//}




  //if (len(isJiraCreation) != 0 ){
  //	document.getElementById('customfield_10030').selectedIndex =  "5"
  //	document.getElementById('description').firstChild.append(templateJira)
//  }
