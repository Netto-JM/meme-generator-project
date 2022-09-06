const memeContainer = document.getElementById('meme-image-container');
const memeTextContainer = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image');
const memeTextInput = document.getElementById('text-input');
const memeImageInput = document.getElementById('meme-insert');

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

memeTextInput.addEventListener('input', insertMemeText);
memeImageInput.addEventListener('change', uploadMemeImage);
