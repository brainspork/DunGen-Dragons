'use strict';

var mainSection = document.getElementsByClassName('main master')[0];
var masterList = mainSection.getElementsByTagName('ul')[0];
var imageList = masterList.getElementsByTagName('img');
var classImages = ['../img/survey/class_warrior.jpg','../img/survey/class_cleric.jpg','../img/survey/class_ranger.jpg','../img/survey/class_rogue.jpg','../img/survey/class_bard.jpg','../img/survey/class_wizard.jpg'];
var chosenRace;
var chosenClass;

function newImages() {
  for (var i= 0; i < classImages.length; i++) {
    var newImage = document.createElement('img');
    var newLi = document.createElement('li');
    newImage.setAttribute('src', classImages[i]);
    newLi.appendChild(newImage);
    masterList.appendChild(newLi);
  }
}

function imageSwap() {
  while (masterList.hasChildNodes()) {
    masterList.removeChild(masterList.lastChild);
  }
  newImages();
  createLastHandler();
}

function raceHandler(raceindex) {
  return function () {
    chosenRace = raceindex;
    imageSwap();
  };
}

function classHandler(raceindex) {
  return function () {
    chosenClass = raceindex;
    generateRandomLanguage();
    generateRandomTraits(chosenRace);
    generateRandomName(chosenRace);
    packageValues();

    document.location.href = '../form/form.html';
  };
}

function packageValues() {
  sessionStorage.charRace = JSON.stringify(chosenRace);
  sessionStorage.charClass = JSON.stringify(chosenClass);
  sessionStorage.charLanguages = JSON.stringify(ranLanguage);
  sessionStorage.charTraits = JSON.stringify(ranTraits);
  sessionStorage.charName = JSON.stringify(ranName);
}

function createFirstHandler() {
  for (var i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('click', raceHandler(allRaces[i]));
  }
}

function createLastHandler() {
  for (var i = 0; i < imageList.length; i++) {
    imageList[i].addEventListener('click', classHandler(allClasses[i]));
  }
}

displayQuestion(0);
