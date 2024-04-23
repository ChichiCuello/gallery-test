/* function gallery() {
  let content = '';
  for (counter = 1; counter < 10; counter++) {
    content = `
    <img src=/images/coffee-${counter}.JPG class="img">
    `
    document.querySelector('.js-container').innerHTML += content;
  }
  document.querySelector('.js-container').addEventListener('click',()=>{
    console.log('This is image an image');
    // add popup

  })
}

gallery();
 */
let currentImageIndex = 0;

function gallery() {
  let content = '';
  for (let counter = 1; counter < 10; counter++) {
    content += `<img src="/images/coffee-${counter}.JPG" class="img">`;
  }
  document.querySelector('.js-container').innerHTML = content;

  const images = document.querySelectorAll('.img');
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentImageIndex = index;
      showPopup();
    });
  });
}

function showPopup() {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popupImg');
  popupImg.src = document.querySelectorAll('.img')[currentImageIndex].src;
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    showPopup();
  }
}

function nextImage() {
  const images = document.querySelectorAll('.img');
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    showPopup();
  }
}

gallery();
