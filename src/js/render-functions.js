import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loaderMessage = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
  .map(
    img => `
      <li class="photo-card">
        <a href="${img.largeImageURL}" class="gallery-item">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-item">
            <b>Likes</b>
            <span>${img.likes}</span>
          </div>
          <div class="info-item">
            <b>Views</b>
            <span>${img.views}</span>
          </div>
          <div class="info-item">
            <b>Comments</b>
            <span>${img.comments}</span>
          </div>
          <div class="info-item">
            <b>Downloads</b>
            <span>${img.downloads}</span>
          </div>
        </div>
      </li>
    `
  )
  .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  if (loaderMessage) loaderMessage.classList.remove('hidden');
}

export function hideLoader() {
  if (loaderMessage) loaderMessage.classList.add('hidden');
}

export function showLoadMoreButton() {
  if (loadMoreBtn) loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
}