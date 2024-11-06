let isListenerAdded = false;
export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('latest-news-head');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('latest-news-title');
      }
      if (d === 1) {
        div.classList.add('latest-news-filter');
      }
      if (d === 2) {
        div.classList.add('latest-news-table');
      }
      if (d === 3) {
        div.classList.add('latest-news-button');
      }
    });
  });
}
