//Message annoncant que le plugin est lancé dans la console.
console.log("Le plugin Jira Chrome est opérationnel");

// Message annoncant que le plugin est bien lancé.

let text = '<p style="color:#0A3269; margin-right:20px"> <b> Vous utilisez actuellement le plugin Jira Chrome<b/><p/>';
document.getElementById('breadcrumbs-container').innerHTML= text;

// Calcul de la compexité plus des pourcentages de done.

let templateJira = '{panel:title=Description|titleBGColor=#1F4591 |borderColor=#1F4591 |titleColor=#FFFFFF} \n {panel}\n{panel:title=Business Rules|titleBGColor=#1F4591 |borderColor=#1F4591 |titleColor=#FFFFFF}\n{panel}</p>'
let isJiraCreation = document.getElementById('create-issue-dialog');

let inProgress = document.getElementsByClassName('ghx-in-progress')[0].innerText;
let notStarted = document.getElementsByClassName('ghx-not-started')[0].innerText;
let done = document.getElementsByClassName('ghx-done')[0].innerText;

let totalComplexity = Number(inProgress) + Number(notStarted) + Number(done);
let doneProgress = Math.ceil(Number(inProgress)/(totalComplexity)*100);


//Progress Bar handling
let myProgressBar = `<div class="progress" style="margin-left:25px; margin-right:25px">
  <div id="mySprintBar" class="progress-bar progress-bar-striped active" role="progressbar" style="width: ${doneProgress}%" aria-valuenow="${doneProgress}" aria-valuemin="0" aria-valuemax="100">${doneProgress}% in progress </div>
</div>
`
document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("afterEnd",myProgressBar);


// Code permettant d'afficher la complexité d'un sprint sur la page de bienvenue du dashboard JIRA:

var complexityText = `<p> Sprint Complexity is ${totalComplexity} points </p>`;
document.getElementsByClassName('ghx-issue-count')[0].innerHTML= complexityText;

// Alerte sur le nombre de taches commencées, plus mise à jour de la progress bar.

const congratsText = '<div style="margin-top:10px" class="alert alert-primary" role="alert"> <strong>Félicitations <strong> !! Toutes les tâches du sprint sont commencées ;)  <button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> </div>';
document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("beforeEnd",congratsText);

if (Number(notStarted) == 0) {
      const allTasksStarted = '<div class="alert alert-primary"  role="alert"> <b> Félicitations </b> !! Toutes les tâches sont commencées ;) <button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> </div>';
      document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("beforeEnd",congratsText);
      };
if (Number(done)==totalComplexity){
  const allTasksDone = '<div class="alert alert-success" role="alert"> Toutes les tâches sont terminée bravoooo ! </div>'
  let mySprintBar = document.getElementById('mySprintBar');
  mySprintBar.setAttribute("style","width=100%")
  mySprintBar.setAttribute("aria-valuenow","100")
  mySprintBar.setAttribute("class","progress-bar progress-bar-success progress-bar-striped active")
}

// Code permettant d'afficher la complexité d'un JIRA sur un déjà déjà crée:

let isJiraCreated = document.getElementById("releases-panel-container");

if (isJiraCreated != undefined){
  let complexity = document.getElementsByClassName("sc-cTSLtG gDoBIS")[2].innerText
  const myComplexity = ` <p> <b> Complexité </b> ${complexity} </p>`
  isJiraCreated.insertAdjacentHTML("afterend",myComplexity);
}

//Alert user about critical Jiras or Bloquant Ones
let nbJiraCritique = document.querySelectorAll('[title="Critique"]').length
let nbJiraMajeur = document.querySelectorAll('[title="Majeur"]').length
let nbJiraBloquant = document.querySelectorAll('[title="Bloquant"]').length
let nbJiraBloquantCollection = document.querySelectorAll('[title="Bloquant"]')

if (nbJiraCritique != 0){
  const alertJiraCritique =`<div class="alert alert-danger alert-dismissible" role="alert"> Attention il y a <b> ${nbJiraCritique} </b> jira critique dans le backlog. <button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> </div>`;
  document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("beforeEnd",alertJiraCritique)
}
if (nbJiraBloquant != 0){
  const alertJiraCritique =`<div class="alert alert-danger" role="alert"> Attention il y a <b> ${nbJiraBloquant} </b> jira bloquant dans le backlog  <button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button></div>`;
  document.getElementsByClassName('ghx-assigned-work-stats')[0].insertAdjacentHTML("beforeEnd",alertJiraCritique)
}
const allTasksDone = '<div class="alert alert-success" role="alert"> Toutes les tâches sont terminée bravoooo !  <button type="button" class="close" data-dismiss="alert" aria-label="close"><span aria-hidden="true">&times;</span></button> </div>'


//Sending a message for Jira Bloquant to the background script
chrome.runtime.sendMessage({nbJiraBloquant: `${nbJiraBloquant}`}, function() {
  console.log(`sent: ${nbJiraBloquant} `)
});
