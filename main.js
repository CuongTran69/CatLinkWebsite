/* ==========================================================================
   Cất Link (CastLink) — Interactive Scripts
   Mockup Tab Switcher, Theme toggle, Language switcher, FAQ accordion, clipboard copy
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initFAQ();
  initCopyButtons();
  initMockupTabs();
  initDynamicYear();
});

// Mockup Interactive Tabs (Today vs Library)
function initMockupTabs() {
  const tabToday = document.getElementById('mockup-tab-today');
  const tabLibrary = document.getElementById('mockup-tab-library');
  const viewToday = document.getElementById('mockup-view-today');
  const viewLibrary = document.getElementById('mockup-view-library');

  if (tabToday && tabLibrary && viewToday && viewLibrary) {
    tabToday.addEventListener('click', () => {
      tabToday.classList.add('active');
      tabLibrary.classList.remove('active');
      viewToday.style.display = 'flex';
      viewLibrary.style.display = 'none';
    });

    tabLibrary.addEventListener('click', () => {
      tabLibrary.classList.add('active');
      tabToday.classList.remove('active');
      viewToday.style.display = 'none';
      viewLibrary.style.display = 'flex';
    });
  }
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('castlink_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  applyTheme(initialTheme);

  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      localStorage.setItem('castlink_theme', nextTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeIcons = document.querySelectorAll('.theme-icon');
  themeIcons.forEach(icon => {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
  const themeTexts = document.querySelectorAll('.theme-text');
  themeTexts.forEach(text => {
    text.textContent = theme === 'dark' ? 'Sáng' : 'Tối';
  });
}

// Language Switcher (Vi / En)
function initLanguage() {
  const savedLang = localStorage.getItem('castlink_lang') || 'vi';
  applyLanguage(savedLang);

  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('data-lang') || 'vi';
      const nextLang = currentLang === 'vi' ? 'en' : 'vi';
      applyLanguage(nextLang);
      localStorage.setItem('castlink_lang', nextLang);
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  
  document.querySelectorAll('[data-i18n-vi]').forEach(el => {
    const viText = el.getAttribute('data-i18n-vi');
    const enText = el.getAttribute('data-i18n-en');
    if (lang === 'en' && enText) {
      el.innerHTML = enText;
    } else if (lang === 'vi' && viText) {
      el.innerHTML = viText;
    }
  });

  const langLabels = document.querySelectorAll('.lang-label');
  langLabels.forEach(lbl => {
    lbl.textContent = lang === 'vi' ? 'EN' : 'VI';
  });
}

// FAQ Accordion
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });
}

// Copy to Clipboard
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          const originalText = btn.innerHTML;
          btn.innerHTML = '<span>✓ Đã sao chép</span>';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      }
    });
  });
}

// Year update
function initDynamicYear() {
  const yearEls = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearEls.forEach(el => el.textContent = year);
}
