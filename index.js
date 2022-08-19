var i = 1;

function clearChar() {

  setTimeout(function() {

    var text = document.querySelector(".cursor");
    text.innerHTML = text.innerHTML.substring(1, text.innerHTML.length);

    if (i < 15) {
      i++;
      clearChar();
    } else {
      document.querySelector(".cursor").style.padding = "0";
      i = 1;
    }

  }, 150)
}

function animation() {
  setTimeout(function() {
    clearChar();
  }, 1000);
}

animation();


//--------------------------

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
//--------------------------


document.addEventListener('scroll', function() {
  
  if (isInViewport(document.querySelector('.bigBracketTitle')) === true) {
    document.querySelector('.titleEl').classList.add("upAppear");
    document.querySelector('.titleEl').classList.remove("transparent");
  }
  if (isInViewport(document.querySelector('.lessThan')) === true) {
    document.querySelector('.titleEl').classList.remove("upAppear");
    document.querySelector('.titleEl').classList.add("transparent")
  }
  
  if (isInViewport(document.querySelector('.bigBracketTitle')) === true || isInViewport(document.querySelector('.dot')) === true) {
    document.querySelector('.aboutText').classList.add("textAppear");
    document.querySelector('.aboutText').classList.remove("transparent");
    document.querySelector('.aboutTextDiv').classList.add("moveToLeft");
    document.querySelector('.hiddenImg').classList.add("elAppear");
    document.querySelector('.hiddenImg').classList.remove("hiddenImgMask");
    document.querySelector('.perfilImgContainer').classList.add("moveToRight");
  }
  if (isInViewport(document.querySelector('#skills')) === true) {
    document.querySelector('.aboutText').classList.remove("textAppear");
    document.querySelector('.aboutText').classList.add("transparent");
    document.querySelector('.aboutTextDiv').classList.remove("moveToLeft");
    document.querySelector('.hiddenImg').classList.remove("elAppear");
    document.querySelector('.hiddenImg').classList.add("hiddenImgMask");
    document.querySelector('.perfilImgContainer').classList.remove("moveToRight");
  }

  if (isInViewport(document.querySelector('.headerSkills')) === true || isInViewport(document.querySelector('.linkIcon')) === true) {
    document.querySelector('.skillsText').classList.add("textAppear");
    document.querySelector('.skillsText').classList.remove("transparent");
    document.querySelector('.skillsTextDiv1').classList.add("moveToRight");
    document.querySelector('.skillsTextDiv2').classList.add("moveToLeft");
    document.querySelector('.headerSkills').classList.add("upAppear");
    document.querySelector('.headerSkills').classList.remove("transparent");
  }
  if (isInViewport(document.querySelector('.lessThan')) === true) {
    document.querySelector('.skillsText').classList.remove("textAppear");
    document.querySelector('.skillsText').classList.add("transparent");
    document.querySelector('.skillsTextDiv1').classList.remove("moveToRight");
    document.querySelector('.skillsTextDiv2').classList.remove("moveToLeft");
    document.querySelector('.headerSkills').classList.remove("upAppear");
    document.querySelector('.headerSkills').classList.add("transparent");
  }
  
  if (isInViewport(document.querySelector('.lessThan')) === true || isInViewport(document.querySelector('.bigBracketProject')) === true) {
    document.querySelector('.projectsDiv').classList.add("upAppear");
    document.querySelector('.projectsDiv').classList.remove("transparent");
  }
  if (isInViewport(document.querySelector('.navbar')) === true) {
    document.querySelector('.projectsDiv').classList.remove("upAppear");
    document.querySelector('.projectsDiv').classList.add("transparent");
  }

});