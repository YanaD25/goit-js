import imagesData from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");

const boxGalleryItem = ({preview, original, description }, index) => {
  const galleryItem = document.createElement("li");
  const galleryLink = document.createElement("a");
  const galleryImage = document.createElement("img");

  galleryItem.classList.add("gallery__item");
  galleryLink.classList.add("gallery__link");
  galleryImage.classList.add("gallery__image");

  
  galleryImage.src = preview;
  galleryImage.dataset.source = original;
  galleryImage.alt = description;
  galleryImage.dataset.index = index;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  galleryRef.appendChild(galleryItem);

  return galleryItem;
};
const galleryMaker = (images) => {
  const galleryBoxHtml = images.map((item, i) => boxGalleryItem(item, i));
  galleryRef.append(...galleryBoxHtml);
};
galleryMaker(imagesData);
