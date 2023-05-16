import { galleryItems } from './gallery-items.js';

// Change code below this line




const refs =  {gallery: document.querySelector('.gallery')};  

const galleryEl = galleryItems.map(el => 
    `<li class="gallery__item">
    <a href="${el.original}" class="gallery__link">
    <img src="${el.preview}" alt="${el.description}" class="gallery__image" data-source="${el.original}">
    </img></a></li>`).join('');

refs.gallery.innerHTML = galleryEl;

refs.gallery.addEventListener('click', openGallery)

function openGallery(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
    const imgUrl = event.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${imgUrl}" width="800" height="600">`);
    instance.show();
    const visible = instance.visible();


    document.addEventListener('keydown', closeModal);

    function closeModal(event) {

         if(event.code === 'Escape' && visible) {
            instance.close();
            document.removeEventListener('keydown', closeModal);
            
        };
        

        
    };
    
};






















console.log(galleryItems);
