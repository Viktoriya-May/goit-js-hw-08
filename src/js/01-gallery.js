// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);

const paletteContainer = document.querySelector('.gallery');

const galleryEl = galleryItems

    .map(({ preview, description, original }) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`)
    .join('');

    paletteContainer.insertAdjacentHTML('beforeend', galleryEl)

    paletteContainer.addEventListener('click', onPaletteContainerClick)

function onPaletteContainerClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    // const modal = basicLightbox.create(
    //     `<img src="${evt.target.dataset.source}" width="1280" height="600">`,

    //     {   onShow: () => window.addEventListener('keydown', onEscKeyPress),
    //         onClose: () => window.removeEventListener('keydown', onEscKeyPress),
    //     }
    // );
    
    // modal.show();

    function onEscKeyPress(evt) {   
        if (evt.code === "Escape") {
            modal.close();
        }
    }
}

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
     captionPosition: 'bottom', 
     captionDelay: 250
  });