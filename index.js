var stepTyping = 0;
var startTyping;
var writeTyping;
var waitTyping;
var deleteTyping;

setInterval(function () {
  var bigHeaderText = document.querySelector(".bigHeader.transparent").innerHTML;
  var bigHeaderTyping = document.querySelector(".bigHeader.cursor");

  if (stepTyping == 0) {
    startTyping = 7;
    writeTyping = 0;
    waitTyping = 60;
    deleteTyping = bigHeaderText.length;
    stepTyping = 0;
    bigHeaderTyping.innerHTML = "";

    stepTyping = 1;
  }


  if (stepTyping == 1) {
    startTyping--;

    if (startTyping == 0) {
      stepTyping = 2;
    }
  }
  if (stepTyping == 2) {
    bigHeaderTyping.innerHTML = bigHeaderText.slice(0, writeTyping + 1);

    writeTyping++;

    if (writeTyping > bigHeaderText.length) {
      stepTyping = 3;
    }
  }
  if (stepTyping == 3) {
    waitTyping--;

    if (waitTyping == 0) {
      stepTyping = 4;
    }
  }
  if (stepTyping == 4) {
    bigHeaderTyping.innerHTML = bigHeaderText.slice(0, deleteTyping);

    deleteTyping--;

    if (deleteTyping == -1) {
      stepTyping = 0;
    }
  }

  var typedLength = bigHeaderTyping.innerHTML.length;

  if (bigHeaderTyping.innerHTML.slice(typedLength - 1, typedLength) == " ") {
    bigHeaderTyping.style.paddingRight = "15px";
  } else {
    bigHeaderTyping.style.paddingRight = "0";
  }

}, 200);


function isInViewport(element) {

  const rect = document.querySelector(element).getBoundingClientRect();

  if ((rect.top > window.innerHeight) || (rect.top < 0 && rect.bottom < 0)) {
    return (false);
  } else {
    return (true);
  }
}




document.addEventListener("scroll", function () {

  if (isInViewport("#home")) {
    document.querySelector(".titleEl").classList.add("upAppear");
    document.querySelector(".titleEl").classList.remove("transparent");
  } else {
    document.querySelector(".titleEl").classList.remove("upAppear");
    document.querySelector(".titleEl").classList.add("transparent")
  }

  if (isInViewport("#about")) {
    document.querySelector(".aboutText").classList.add("textAppear");
    document.querySelector(".aboutText").classList.remove("transparent");
    document.querySelector(".aboutTextDiv").classList.add("moveToLeft");
    document.querySelector(".hiddenImg").classList.add("elAppear");
    document.querySelector(".hiddenImg").classList.remove("hiddenImgMask");
    document.querySelector(".perfilImgContainer").classList.add("moveToRight");
  } else {
    document.querySelector(".aboutText").classList.remove("textAppear");
    document.querySelector(".aboutText").classList.add("transparent");
    document.querySelector(".aboutTextDiv").classList.remove("moveToLeft");
    document.querySelector(".hiddenImg").classList.remove("elAppear");
    document.querySelector(".hiddenImg").classList.add("hiddenImgMask");
    document.querySelector(".perfilImgContainer").classList.remove("moveToRight");
  }

  if (isInViewport("#projects")) {
    document.querySelector(".projectsDiv").classList.add("upAppear");
    document.querySelector(".projectsDiv").classList.remove("transparent");
  } else {
    document.querySelector(".projectsDiv").classList.remove("upAppear");
    document.querySelector(".projectsDiv").classList.add("transparent");
  }

  if (isInViewport("#skills")) {
    document.querySelector(".skillsText").classList.add("textAppear");
    document.querySelector(".skillsText").classList.remove("transparent");
    document.querySelector(".skillsTextDiv1").classList.add("moveToRight");
    document.querySelector(".skillsTextDiv2").classList.add("moveToLeft");
    document.querySelector(".headerSkills").classList.add("upAppear");
    document.querySelector(".headerSkills").classList.remove("transparent");
  } else {
    document.querySelector(".skillsText").classList.remove("textAppear");
    document.querySelector(".skillsText").classList.add("transparent");
    document.querySelector(".skillsTextDiv1").classList.remove("moveToRight");
    document.querySelector(".skillsTextDiv2").classList.remove("moveToLeft");
    document.querySelector(".headerSkills").classList.remove("upAppear");
    document.querySelector(".headerSkills").classList.add("transparent");
  }

});


function adjustProjectCardHeight() {

  let projItens = document.querySelectorAll(".projItem")
  let greaterHeight = 0

  projItens.forEach(projItem => { projItem.style.height = `auto` })

  for (let i = 0; i < projItens.length; i++) {

    if (projItens[i].offsetHeight > greaterHeight) {

      greaterHeight = projItens[i].offsetHeight

    }

    if (projItens.length === i + 1) {

      projItens.forEach(projItem => { projItem.style.height = `${greaterHeight}px` })

    }

  }
}

adjustProjectCardHeight()


window.addEventListener('resize', function () {
  adjustProjectCardHeight()
});
