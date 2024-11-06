export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add('mlow-news-header');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('news-heading');
        }
        if (d === 1) {
          div.classList.add('news-view-more');
        }
      });
    }
    if (r === 1) {
      row.classList.add('mlow-news-filter');
    }
    if (r === 2) {
      row.classList.add('mlow-news-content');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('content-info');
          const para = div.querySelectorAll('p');
          para.forEach((p, i) => {
            if (i === 0) {
              p.classList.add('content-para');
            }
            if (i === 1) {
              p.classList.add('content-date');
            }
          });
        }
        if (d === 1) {
          div.classList.add('content-image');
        }
      });
    }
    if (r === 3) {
      row.classList.add('mlow-news-marquee');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('marquee-text');
          const pTag = div.querySelector('p');
          if (pTag) {
            const textContent = pTag.textContent;
            pTag.remove(); // Remove the original <p> tag
            const marquee = document.createElement('marquee');
            marquee.textContent = textContent;
            marquee.setAttribute('direction', 'left');
            div.appendChild(marquee); // Insert the <marquee> tag with the text
          }
        }
        if (d === 1) {
          div.classList.add('marquee-button');
        }
      });
    }
    if (r === 4) {
      row.classList.add('mlow-news-footer');
      [...row.children].forEach((div, d) => {
        div.classList.add('footer-sec');
        div.classList.add('footer-sec-'.concat(d + 1));
      });
    }
  });
}
