const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {

      const button = item.querySelector('.faq-question');

      button.addEventListener('click', () => {

        faqItems.forEach(otherItem => {

          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.icon').textContent = '+';
          }

        });

        item.classList.toggle('active');

        const icon = item.querySelector('.icon');

        if (item.classList.contains('active')) {
          icon.textContent = '−';
        } else {
          icon.textContent = '+';
        }

      });

    });