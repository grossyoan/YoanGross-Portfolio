let container = document.querySelector(".galeriesImages")
let labels = document.querySelectorAll(".liSelect")

function getRandomArray(a) {
  return a.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1])
}
let arrayArtist = getRandomArray(data.ARTISTE)
for(let j=0;j<1;j++){
  for(let i=0; i<arrayArtist.length;i++){
    let id = generatetID()
    createMainDiv(id, arrayArtist[i].artist_name, arrayArtist[i].artist_type, arrayArtist[i].artist_description, arrayArtist[i].artist_class_name,arrayArtist[i].artist_link)
    createModal(id,arrayArtist[i].artist_link, arrayArtist[i].artist_name,arrayArtist[i].artist_description,arrayArtist[i].artist_type)
  }
}
for(let i = 0; i < labels.length; i++){
  labels[i].addEventListener('click', function () {
    if(labels[i].classList[1] == "selected"){
      labels[i].classList.remove("selected")
      labels[i].classList.add("unselected")
      allVisible(labels)
    }
    else{
      for(let j = 0; j<labels.length;j++){
        if(labels[j].classList[1] == "selected"){
          labels[j].classList.remove("selected")
          labels[j].classList.add("unselected")
        }
      }
      if(labels[i].classList[1] == "unselected"){
        labels[i].classList.remove("unselected")
        labels[i].classList.add("selected")
      }
    }
    for(let j = 0; j<labels.length;j++){
      if(labels[j].classList[1] == "selected"){
        elementMan(labels[j].id)
      }
    }
  });
}
function addImg(parent, link, alt, classType){
  let img = document.createElement("img");
  img.setAttribute("src",  link);
  img.setAttribute("alt", alt);
  img.classList.add(classType);
  parent.appendChild(img)
}
function generatetID(){
  return '_' + Math.random().toString(36).substr(2, 9);
};
function elementMan(id){
  let element = document.querySelectorAll(".galerieContainer")
  for(let j = 0; j<element.length;j++){
    if(element[j].classList[1] == id || element[j].classList[2] == id){
      element[j].style.visibility = "visible"
      element[j].style.position = "relative"
      }
      else{
          element[j].style.visibility = "hidden"
          element[j].style.position = "fixed"
      }
  }
}
function allLabelChecked(element){
  let bool = true;
  for(let i =0; i < element.length; i++){
    if(element[i].classList[1] == "selected"){
      bool = false;
    }
  }
  return bool;
}
function allVisible(label){
  let elements = document.querySelectorAll(".galerieContainer")
  if(allLabelChecked(label)){
    for(let j = 0; j<elements.length; j++){
      elements[j].style.visibility = "visible"
      elements[j].style.position = "relative"
    }
  }
}
function createMainDiv(id, artistName, typeImg, artDescription, artistClassName, artistLink){
  let mainDiv= document.createElement("div")
  let divOverlay = document.createElement("div")
  let button = document.createElement("div")
  divOverlay.classList.add("overlay");
  mainDiv.classList.add("galerieContainer");
  mainDiv.classList.add(typeImg);
  mainDiv.classList.add(artistClassName);
  mainDiv.setAttribute("id", id)
  mainDiv.innerHTML = ' ';
  addImg(mainDiv, artistLink, "none", "image")
  container.appendChild(mainDiv)
  mainDiv.appendChild(divOverlay)
  addDOMElement(divOverlay, "div", "text", artistName)
  addDOMElement(divOverlay, "div", "text", typeImg)
  button.classList.add("button")
  button.innerHTML = "Voir"
  divOverlay.appendChild(button)
}
function addDOMElement(parent, type, className, content, id){
    let container = document.createElement(type);
    if (className != "") {
      container.classList.add(className)
    }
    if (id != undefined) {
      container.setAttribute("id", id)
    }
    container.innerHTML = content
    parent.appendChild(container)
    return container
}
/*Modals creation*/
function createModal(id,artistLink, artistName, artistContent, artistType){
  let modals = document.querySelector(".modals")
  let modalContainer = addDOMElement(modals, "div", "modalContainer", "", id)
  let modal = addDOMElement(modalContainer, "div", "modal", "")
  let modalImgContainer = addDOMElement(modal, "div", "imgModalContainer", "")
  let modalText = addDOMElement(modal, "div", "modalText", "")
  let modalButton = addDOMElement(modalText, "div", "closeButton", "")
  let spanButton = addDOMElement(modalButton, "span", "buttonClose", "X")
  let secondTitle = addDOMElement(modalText, "h2", "", artistName)
  let thirdTitle = addDOMElement(modalText, "h3", "", artistType)
  let modalParagraph = addDOMElement(modalText, "p", "description", artistContent)
  let divCommentary = addDOMElement(modalText, "div", "commentary", "Zone commentaire :")
  addImg(modalImgContainer, artistLink, "none", "modalImg")
}
/*Modal button open*/
const buttons = document.getElementsByClassName("button")
const modalsCont = document.getElementsByClassName("modalContainer")
const closeModals = document.getElementsByClassName("buttonClose")
for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
          openModal(i)
        });
}
for(let i = 0; i < closeModals.length; i++){
        closeModals[i].addEventListener('click', function(){
          closeModal(i)
        });
}
function openModal(index) {
  modalsCont[index].style.display = "block";
}
// Close the Modal
function closeModal(index) {
  modalsCont[index].style.display = "none";
}
