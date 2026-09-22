document.addEventListener('DOMContentLoaded', function () {
  const trigger = document.querySelector('.video-trigger');
  if (!trigger) return;

  const modal = document.createElement('div');
  modal.id = 'dongxiu-video-modal';
  modal.className = 'video-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="video-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="dongxiu-video-title">
      <button class="video-modal__close" type="button" aria-label="关闭视频">×</button>
      <p class="video-modal__title" id="dongxiu-video-title">侗绣 · 靛蓝与彩线的千年对话</p>
      <video class="video-modal__player" controls playsinline preload="metadata">
        <source src="video/dongxiu.mp4" type="video/mp4">
        您的浏览器不支持 HTML5 视频播放。
      </video>
    </div>
  `;
  document.body.appendChild(modal);

  const closeButton = modal.querySelector('.video-modal__close');
  const player = modal.querySelector('.video-modal__player');
  let lastFocusedElement = null;

  function closeModal() {
    player.pause();
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('video-modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function openModal() {
    lastFocusedElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('video-modal-open');
    closeButton.focus();
  }

  trigger.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', function (event) {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});
