/**
 * Vanilla JS Lightbox Engine
 */
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const triggers = document.querySelectorAll('.lightbox-trigger');

  if (!lightbox || !lightboxImg || !lightboxCaption || !closeBtn) return;

  const openLightbox = (trigger) => {
    const fullSrc = trigger.getAttribute('data-full');
    const altText = trigger.getAttribute('data-alt');

    lightboxImg.src = fullSrc;
    lightboxImg.alt = altText;
    lightboxCaption.textContent = altText;

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');

    setTimeout(() => {
      lightbox.classList.remove('opacity-0');
      lightbox.classList.add('opacity-100');
    }, 10);

    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.remove('opacity-100');
    lightbox.classList.add('opacity-0');

    setTimeout(() => {
      lightbox.classList.remove('flex');
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }, 300);

    document.body.style.overflow = '';
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openLightbox(trigger));
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });
});
