var giveBackIcon = document.querySelector("#giveBack");
const communityIcon = document.querySelector('#community');
const familiesIcon = document.querySelector('#families');
const professionalIcon = document.querySelector('#professional');

giveBackIcon.addEventListener('click', giveBackFunc);
communityIcon.addEventListener('click', communityFunc);
familiesIcon.addEventListener('click', familiesFunc);
professionalIcon.addEventListener('click', professionalFunc);

function giveBackFunc(){
  changeInfo(giveBackIcon);
}

function communityFunc(){
  changeInfo(communityIcon);
}

function familiesFunc(){
  changeInfo(familiesIcon);
}

function professionalFunc(){
  changeInfo(professionalIcon);
}

function changeInfo(clickedIcon) {
  let container = `#${clickedIcon.id}Container`;

  // DISAPPEAR
  document.querySelector('#giveBackContainer').classList.add('disappear');
  document.querySelector('#communityContainer').classList.add('disappear');
  document.querySelector('#familiesContainer').classList.add('disappear');
  document.querySelector('#professionalContainer').classList.add('disappear');

  // BOTTOM BORDER
  document.querySelector('#giveBack').classList.remove('activeIcon');
  document.querySelector('#community').classList.remove('activeIcon');
  document.querySelector('#families').classList.remove('activeIcon');
  document.querySelector('#professional').classList.remove('activeIcon');

  // document.querySelector('#giveBackContainer').classList.remove('disappear');
  document.querySelector(container).classList.remove('disappear');
  clickedIcon.classList.add('activeIcon');

}