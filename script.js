const memeContainerEl = document.getElementById('meme-image-container');
const memeTextContainerEl = document.getElementById('meme-text');
const memeImageContainerEl = document.getElementById('meme-image');
const memeTextInputEl = document.getElementById('text-input');
const memeImageInputEl = document.getElementById('meme-insert');
const buttonsEl = document.getElementById('buttons');
const previewImagesEl = document.getElementById('preview-images');

function insertMemeText(event) {
  const memeText = event.target.value;
  memeTextContainerEl.textContent = memeText;
  console.log(memeText);
}

function uploadMemeImage(event) {
  const uploadedImage = event.target.files;
  const [imageBlob] = uploadedImage;
  const imageUrl = URL.createObjectURL(imageBlob);
  memeImageContainerEl.src = imageUrl;
}

function getFrame(frameName) {
  if (frameName === 'fire') return '3px dashed red';
  if (frameName === 'water') return '5px double blue';
  if (frameName === 'earth') return '6px groove green';
}

function changeFrame(event) {
  const clickedButton = event.target.closest('button');
  const clickedWhiteSpace = !clickedButton;
  if (clickedWhiteSpace) return;
  memeContainerEl.style.border = getFrame(clickedButton.id);
}

function useMemePreview(event) {
  const clickedImg = event.target.closest('img');
  const clickedWhiteSpace = !clickedImg;
  if (clickedWhiteSpace) return;
  const memePreviewSrc = clickedImg.src.slice(-14);
  const memePreviousSrc = memeImageContainerEl.src.slice(-14);
  if (memePreviewSrc === memePreviousSrc) return;
  memeImageContainerEl.src = memePreviewSrc;
}

memeTextInputEl.addEventListener('input', insertMemeText);
memeImageInputEl.addEventListener('change', uploadMemeImage);
buttonsEl.addEventListener('click', changeFrame);
previewImagesEl.addEventListener('click', useMemePreview);
