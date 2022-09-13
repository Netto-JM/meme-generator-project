const memeContainerEl = document.getElementById('meme-image-container');
const memeTextContainer = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image');
const memeTextInput = document.getElementById('text-input');
const memeImageInput = document.getElementById('meme-insert');
const buttonsEl = document.getElementById('buttons');

function insertMemeText(event) {
  const memeText = event.target.value;
  memeTextContainer.textContent = memeText;
  console.log(memeText);
}

function uploadMemeImage(event) {
  const uploadedImage = event.target.files;
  const [imageBlob] = uploadedImage;
  const imageUrl = URL.createObjectURL(imageBlob);
  memeImageContainer.src = imageUrl;
  /* memeImageContainer.style.border =  */
}

function changeFrame(event) {
  const clickedButton = event.target.closest('button');
  const clickedWhiteSpace = !clickedButton;
  if (clickedWhiteSpace) return;
  if (clickedButton.id === 'fire') {
    memeContainerEl.style.border = '3px dashed red';
  } else if (clickedButton.id === 'water') {
    memeContainerEl.style.border = '5px double blue';
  } else if (clickedButton.id === 'earth') {
    memeContainerEl.style.border = '6px groove green';
  }
}

memeTextInput.addEventListener('input', insertMemeText);
memeImageInput.addEventListener('change', uploadMemeImage);
buttonsEl.addEventListener('click', changeFrame);
