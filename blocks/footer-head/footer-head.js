export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('footer-banner');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('footer-logo');
      }
      if (d === 1) {
        div.classList.add('footer-social');
        const paragraphs = div.querySelectorAll('p');
        paragraphs.forEach((p, i) => {
          p.classList.add('social-image-'.concat(i + 1));
        });
      }
    });
  });
}
