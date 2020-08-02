import imagesData from "./gallery-items.js";

const jsGalleryRef = document.querySelector(".js-gallery");

const boxGalleryItem = ({ preview, original, description }, index) => {
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
  jsGalleryRef.appendChild(galleryItem);

  return galleryItem;
};
const galleryMaker = (images) => {
  const galleryBoxHtml = images.map((item, i) => boxGalleryItem(item, i));
  jsGalleryRef.append(...galleryBoxHtml);
};
galleryMaker(imagesData);

const refs = {
  lightbox: document.querySelector(".lightbox"),
  jsLightbox: document.querySelector(".js-lightbox"),
  overlay: document.querySelector(".lightbox__overlay"),
  content: document.querySelector(".lightbox__content"),
  image: document.querySelector(".lightbox__image"),
  button: document.querySelector(".lightbox__button"),
};

jsGalleryRef.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgRef = event.target;
  const largeImageURL = imgRef.dataset.source;
  setLargeImageSrc(largeImageURL);
  refs.lightbox.classList.add("is-open");
}

const setLargeImageSrc = (url) => {
  refs.image.src = url;
};

const closeLightbox = () => {
  refs.lightbox.classList.remove("is-open");
  refs.image.src = "";
};

const closeModal = document.querySelector(
  'button[data-action="close-lightbox"]'
);
closeModal.addEventListener("click", () => {
  closeLightbox();
});

refs.lightbox.addEventListener("click", (event) => {
  if (event.target.nodeName !== "IMG") {
    closeLightbox();
  }
});

const closeEsc = (event) => {
  if (event.code === "Escape") {
    closeLightbox();
  }
};
document.addEventListener("keyup", closeEsc);
