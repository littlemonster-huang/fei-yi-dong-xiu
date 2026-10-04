document.addEventListener('DOMContentLoaded', function () {
  const revealTargets = [
    '.Pixso-frame-2_76',
    '.Pixso-frame-2_251',
    '.Pixso-frame-2_551',
    '.Pixso-frame-2_860',
    '.Pixso-frame-2_1087',
    '.Pixso-frame-2_1097',
    '.Pixso-frame-2_1205'
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((selector) => {
    const node = document.querySelector(selector);
    if (node) {
      observer.observe(node);
    }
  });

  const parallaxTargets = document.querySelectorAll('.Pixso-frame-2_104');
  parallaxTargets.forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      /* 只做背景视差，不施加任何 transform：
         3D（rotateX/rotateY）与小数缩放会让容器内文字失去亚像素抗锯齿 → 悬停发糊。 */
      el.style.backgroundPosition = `${50 + x * 6}% ${50 + y * 8}%`;
      el.style.transition = 'background-position 0.12s ease-out';
    });

    el.addEventListener('pointerleave', () => {
      el.style.backgroundPosition = 'center';
      el.style.transition = 'background-position 0.35s ease';
    });
  });

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches) return;

  const cards = document.querySelectorAll('[class^="Pixso-frame-2_104"], [class^="Pixso-frame-2_139"], [class^="Pixso-frame-2_150"], [class^="Pixso-frame-2_161"], [class^="Pixso-frame-2_689"], [class^="Pixso-frame-2_725"], [class^="Pixso-frame-2_738"], [class^="Pixso-frame-2_751"], [class^="Pixso-frame-2_965"], [class^="Pixso-frame-2_975"], [class^="Pixso-frame-2_985"], [class^="Pixso-frame-2_995"], [class^="Pixso-frame-2_1005"], [class^="Pixso-frame-2_1015"], [class^="Pixso-frame-2_1027"], [class^="Pixso-frame-2_1037"]');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      card.addEventListener('transitionend', function clean(e){
        if(e.propertyName === 'transform'){ card.style.transform = 'none'; card.removeEventListener('transitionend', clean); }
      });
    }, 120 * index + 200);
  });
});
