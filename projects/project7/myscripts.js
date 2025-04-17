const imgArray = [
  'Heronlg.jpg',
  'Owl1lg.jpg',
  'Pigeonlg.jpg',
  'Quaillg.jpg'
];

const titleArray = [
  'Heron',
  'Owl',
  'Pigeon',
  'Quail'
];

const imgPath = "Images/fullsize/";

function swapImage(imgID) {
  const theImage = document.getElementById('theImage');
  const textDiv = document.getElementById('bottomText');

  theImage.src = imgPath + imgArray[imgID];
  theImage.alt = titleArray[imgID];
  textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
  for (let i = 0; i < imgArray.length; i++) {
    const tmpImg = new Image();
    tmpImg.src = imgPath + imgArray[i];
  }
}
