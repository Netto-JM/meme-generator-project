const memeContainerEl = document.getElementById('meme-image-container');
const memeTextContainer = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image');
const memeTextInput = document.getElementById('text-input');
const memeImageInput = document.getElementById('meme-insert');
const buttonsEl = document.getElementById('buttons');
const previewImagesEl = document.getElementById('preview-images');

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
  const memePreviousSrc = memeImageContainer.src.slice(-14);
  if (memePreviewSrc === memePreviousSrc) return;
  memeImageContainer.src = memePreviewSrc;
}

memeTextInput.addEventListener('input', insertMemeText);
memeImageInput.addEventListener('change', uploadMemeImage);
buttonsEl.addEventListener('click', changeFrame);
previewImagesEl.addEventListener('click', useMemePreview);
