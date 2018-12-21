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
let doneProgress = Math.ceil(Number(inProgress)/(totalComplexity)*100);


//Progress Bar handling
let myProgressBar = `<div id="mySprintBar" class="progress" style="margin-left:25px; margin-right:25px">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${doneProgress}%" aria-valuenow="${doneProgress}" aria-valuemin="0" aria-valuemax="100">${doneProgress}% in progress </div>
</div>
`
//function alertBasic(variable,elemClass){
//let alertMessage = `<div class="alert alert-primary" role="alert">hello world</div>`;
//  document.getElementsByClassName(elem).insertAdjacentHTML(alertMessage)
//}
//alertBasic('hello  world',ghx-assigned-work-stats)
document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("afterEnd",myProgressBar);


// Code permettant d'afficher la complexité d'un sprint sur la page de bienvenue du dashboard JIRA:

const complexityText = `<p> Sprint Complexity is ${totalComplexity} points </p>`;
document.getElementsByClassName('ghx-issue-count')[0].innerHTML= complexityText;

const congratsText = '<div style="margin-top:10px" class="alert alert-primary" role="alert"> <strong>Félicitations <strong> !! Toutes les tâches du sprint sont commencées ;) </div>';
document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("beforeEnd",congratsText);

if (Number(notStarted) == 0) {
      const congratsText = '<div class="alert alert-primary" role="alert"> <strong>Félicitations </strong> !! Toutes les tâches sont commencées ;) </div>';
      document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("beforeEnd",congratsText);
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
