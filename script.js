const memeContainer = document.getElementById('meme-image-container');
const memeTextContainer = document.getElementById('meme-text');
const memeTextInput = document.getElementById('text-input');

function previewText(event) {
  const memeText = event.target.value;
  memeTextContainer.textContent = memeText;
  console.log(memeText);
}

memeTextInput.addEventListener('input', previewText);
