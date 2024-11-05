export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('iap-image-card');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('iap-card-image');
      }
      if (d === 1) {
        div.classList.add('iap-card-title');
      }
      if (d === 2) {
        div.classList.add('iap-card-data');
      }
      if (d === 3) {
        div.classList.add('iap-card-button');
      }
    });
  });
}
