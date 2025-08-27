document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribe-form');
  const modal = document.getElementById('subscribe-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');

  form.addEventListener('submit', e => {
    e.preventDefault();
    modal.classList.add('active');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });
});

// finish