// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links a');

navToggle?.addEventListener('click', () => {
  nav?.classList.toggle('open');
  document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Header scroll effect
const header = document.querySelector('.header');

const handleScroll = () => {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll);
handleScroll();

// Gallery Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
const lightboxImage = lightbox?.querySelector('.lightbox-image');
const lightboxVideo = lightbox?.querySelector('.lightbox-video');
const galleryItems = document.querySelectorAll('.gallery-item');

function openLightbox(type, src) {
  if (!lightbox) return;
  lightbox.classList.remove('show-image', 'show-video');
  lightboxImage.src = '';
  lightboxVideo.src = '';
  lightboxVideo.pause();

  if (type === 'image') {
    lightboxImage.src = src;
    lightboxImage.alt = 'Davul Zurna';
    lightbox.classList.add('show-image');
  } else {
    lightboxVideo.src = src;
    lightboxVideo.load();
    lightbox.classList.add('show-video');
  }

  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open', 'show-image', 'show-video');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lightboxVideo?.pause();
}

galleryItems?.forEach(item => {
  item.addEventListener('click', () => {
    const type = item.dataset.type;
    const src = item.dataset.src;
    if (type && src) openLightbox(type, src);
  });
});

lightboxClose?.addEventListener('click', closeLightbox);

lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox?.classList.contains('open')) {
    closeLightbox();
  }
});
