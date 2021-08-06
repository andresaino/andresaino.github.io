let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/aroma-art-1.jpg') {
      myImage.setAttribute('src','images/aroma-art-2.jpg');
    } else {
      myImage.setAttribute('src','images/aroma-art-1.jpg');
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Aromatherapy Feeds the Senses, ' + myName;

  }
}

if(!localStorage.getItem('name')) {
  setUserName(); // can call an event handler funcion manually too!
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Aromatherapy Feeds the Senses, ' + storedName;
}
