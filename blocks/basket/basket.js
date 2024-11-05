export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('basket-image-card');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('basket-card-image');
      }
      if (d === 1) {
        div.classList.add('basket-card-title');
      }
      if (d === 2) {
        div.classList.add('basket-card-data');
      }
      if (d === 3) {
        div.classList.add('basket-card-button');
      }
    });
  });
}
