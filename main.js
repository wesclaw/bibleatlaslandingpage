const questions = document.querySelectorAll('.faq-question');

  questions.forEach((btn) => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);

      const answer = btn.nextElementSibling;
      if (!expanded) {
        answer.classList.add('open');
      } else {
        answer.classList.remove('open');
      }
    });
  });