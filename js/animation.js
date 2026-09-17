document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
    :root {
      --site-bg: #f6f0e4;
      --site-surface: rgba(255,255,255,0.7);
      --site-gold: #be8f45;
      --site-red: #b33a2e;
      --site-deep: #17253d;
      --site-deep-2: #213657;
      --site-shadow: 0 20px 50px rgba(26, 21, 17, 0.12);
    }

    body {
      background:
        radial-gradient(circle at top left, rgba(190, 143, 69, 0.16), transparent 20%),
        radial-gradient(circle at bottom right, rgba(179, 58, 46, 0.09), transparent 25%),
        var(--site-bg);
      transition: background 0.4s ease;
    }

    .scroll-container {
      height: 100vh !important;
      overflow-y: auto !important;
      overflow-x: auto !important;
    }

    .Pixso-canvas-0_1,
    .Pixso-frame-2_49 {
      height: auto !important;
      min-height: 100vh;
      overflow: visible !important;
    }

    .Pixso-frame-2_251,
    .Pixso-frame-2_551,
    .Pixso-frame-2_860 {
      opacity: 1 !important;
      transform: none !important;
      visibility: visible !important;
    }

    .Pixso-frame-2_49 {
      background: linear-gradient(180deg, #f8f3ea 0%, #f1e8da 100%);
      position: relative;
    }

    .Pixso-frame-2_50,
    .Pixso-frame-2_485,
    .Pixso-frame-2_794,
    .Pixso-frame-2_1161 {
      position: sticky !important;
      top: 0;
      z-index: 30;
      backdrop-filter: blur(14px);
      background: rgba(23, 37, 61, 0.88) !important;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 16px 26px rgba(15, 24, 38, 0.12);
      transition: background 0.35s ease, box-shadow 0.35s ease;
    }

    .Pixso-frame-2_62 {
      gap: 18px !important;
    }

    .Pixso-frame-2_62 .Pixso-paragraph-2_63,
    .Pixso-frame-2_62 .Pixso-paragraph-2_64,
    .Pixso-frame-2_62 .Pixso-paragraph-2_65,
    .Pixso-frame-2_62 .Pixso-paragraph-2_498,
    .Pixso-frame-2_62 .Pixso-paragraph-2_499,
    .Pixso-frame-2_62 .Pixso-paragraph-2_500,
    .Pixso-frame-2_62 .Pixso-paragraph-2_807,
    .Pixso-frame-2_62 .Pixso-paragraph-2_808,
    .Pixso-frame-2_62 .Pixso-paragraph-2_809,
    .Pixso-frame-2_62 .Pixso-paragraph-2_1174,
    .Pixso-frame-2_62 .Pixso-paragraph-2_1175,
    .Pixso-frame-2_62 .Pixso-paragraph-2_1176 {
      transition: color 0.25s ease, transform 0.25s ease, opacity 0.25s ease;
      cursor: pointer;
      position: relative;
      opacity: 0.8;
    }

    .Pixso-frame-2_62 .Pixso-paragraph-2_63:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_64:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_65:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_498:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_499:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_500:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_807:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_808:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_809:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_1174:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_1175:hover,
    .Pixso-frame-2_62 .Pixso-paragraph-2_1176:hover {
      color: #f6d79d !important;
      transform: translateY(-1px);
      opacity: 1;
    }

    .Pixso-frame-2_76 {
      overflow: hidden;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08);
      background:
        radial-gradient(circle at 18% 20%, rgba(190,143,69,0.24), transparent 18%),
        radial-gradient(circle at 70% 30%, rgba(179,58,46,0.16), transparent 24%),
        linear-gradient(135deg, rgba(23,37,61,1) 0%, rgba(33,54,87,0.96) 100%);
    }

    .Pixso-frame-2_76::before,
    .Pixso-frame-2_76::after {
      content: "";
      position: absolute;
      inset: auto auto -80px -60px;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
      filter: blur(10px);
      animation: floatOrb 16s ease-in-out infinite alternate;
      pointer-events: none;
    }

    .Pixso-frame-2_76::after {
      inset: 50px -50px auto auto;
      width: 220px;
      height: 220px;
      background: rgba(190,143,69,0.16);
      animation-delay: 3s;
    }

    .Pixso-frame-2_69,
    .Pixso-frame-2_504,
    .Pixso-frame-2_813,
    .Pixso-frame-2_1180 {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
      box-shadow: 0 8px 18px rgba(23, 37, 61, 0.08);
    }

    .Pixso-frame-2_69:hover,
    .Pixso-frame-2_504:hover,
    .Pixso-frame-2_813:hover,
    .Pixso-frame-2_1180:hover {
      transform: translateY(-3px) scale(1.01);
      box-shadow: 0 18px 28px rgba(23, 37, 61, 0.12);
      border-color: rgba(190,143,69,0.7);
    }

    .Pixso-frame-2_69::before,
    .Pixso-frame-2_504::before,
    .Pixso-frame-2_813::before,
    .Pixso-frame-2_1180::before {
      content: "";
      position: absolute;
      inset: 0;
      transform: translateX(-130%);
      background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.5), transparent 80%);
      transition: transform 0.6s ease;
    }

    .Pixso-frame-2_69:hover::before,
    .Pixso-frame-2_504:hover::before,
    .Pixso-frame-2_813:hover::before,
    .Pixso-frame-2_1180:hover::before {
      transform: translateX(130%);
    }

    .Pixso-frame-2_77,
    .Pixso-frame-2_179,
    .Pixso-frame-2_251,
    .Pixso-frame-2_551,
    .Pixso-frame-2_860,
    .Pixso-frame-2_1161 {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease;
    }

    .Pixso-frame-2_179,
    .Pixso-frame-2_251,
    .Pixso-frame-2_551,
    .Pixso-frame-2_860,
    .Pixso-frame-2_1161 {
      position: relative;
    }

    .Pixso-frame-2_179:hover,
    .Pixso-frame-2_251:hover,
    .Pixso-frame-2_551:hover,
    .Pixso-frame-2_860:hover,
    .Pixso-frame-2_1161:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 34px rgba(23, 37, 61, 0.08);
    }

    .Pixso-vector-2_79,
    .Pixso-vector-2_488,
    .Pixso-vector-2_797,
    .Pixso-vector-2_1164,
    .Pixso-vector-2_892 {
      filter: drop-shadow(0 8px 10px rgba(190, 143, 69, 0.22));
      animation: pulse 2.6s ease-in-out infinite;
    }

    @keyframes floatOrb {
      0% { transform: translate3d(0,0,0) scale(1); }
      100% { transform: translate3d(18px,-18px,0) scale(1.06); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.08); }
    }
  `;
  document.head.appendChild(style);

  const nodes = document.querySelectorAll(
    ".Pixso-frame-2_77, .Pixso-frame-2_179, .Pixso-frame-2_251, .Pixso-frame-2_551, .Pixso-frame-2_860, .Pixso-frame-2_1161"
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.12 });

  nodes.forEach((node, index) => {
    setTimeout(() => {
      revealObserver.observe(node);
    }, 80 * index);
  });

  const hero = document.querySelector(".Pixso-frame-2_76");
  if (hero) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      hero.style.backgroundPosition = `${50 + x * 8}% ${50 + y * 10}%`;
      hero.style.transform = `scale(1.005) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg)`;
    });

    hero.addEventListener("pointerleave", () => {
      hero.style.backgroundPosition = "center";
      hero.style.transform = "scale(1) rotateX(0deg) rotateY(0deg)";
    });
  }

  document.querySelectorAll(".Pixso-frame-2_69, .Pixso-frame-2_504, .Pixso-frame-2_813, .Pixso-frame-2_1180").forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.animate([
        { transform: "translateY(0) scale(1)" },
        { transform: "translateY(-2px) scale(1.02)" },
        { transform: "translateY(0) scale(1)" }
      ], {
        duration: 260,
        easing: "ease-out"
      });
    });
  });

  const sectionMap = {
    "home": "2_76",
    "overview": "2_108",
    "origin": "2_251",
    "feature": "2_551",
    "craft": "2_860"
  };

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (scrollContainer) {
      const containerRect = scrollContainer.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      scrollContainer.scrollTo({
        top: scrollContainer.scrollTop + targetRect.top - containerRect.top,
        behavior: "smooth"
      });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollContainer = document.querySelector(".scroll-container");

  const bindClick = (selector, handler) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.style.cursor = "pointer";
      node.tabIndex = 0;
      node.addEventListener("click", handler);
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handler(event);
        }
      });
    });
  };

  bindClick('[id="2_73"], [id="2_508"], [id="2_817"], [id="2_1184"]', () => {
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  bindClick('[id="2_88"]', () => scrollToSection(sectionMap.overview));

  bindClick('[id="2_63"], [id="2_498"], [id="2_807"], [id="2_1174"]', () => scrollToSection(sectionMap.origin));
  bindClick('[id="2_64"], [id="2_499"], [id="2_808"], [id="2_1175"]', () => scrollToSection(sectionMap.feature));
  bindClick('[id="2_65"], [id="2_500"], [id="2_809"], [id="2_1176"]', () => scrollToSection(sectionMap.craft));

  bindClick('[id="2_230"], [id="2_531"], [id="2_840"], [id="2_1207"]', () => scrollToSection(sectionMap.origin));
  bindClick('[id="2_231"], [id="2_532"], [id="2_841"], [id="2_1208"]', () => scrollToSection(sectionMap.feature));
  bindClick('[id="2_232"], [id="2_533"], [id="2_842"], [id="2_1209"]', () => scrollToSection(sectionMap.craft));

  const root = document.documentElement;
  root.style.scrollBehavior = "smooth";

  const docTitle = document.title || "非遗侗绣·云丝侗韵·智绣魔方";
  if (docTitle === "Pixso HTML") {
    document.title = "非遗侗绣·云丝侗韵·智绣魔方";
  }
});
