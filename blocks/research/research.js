export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('research-image-card');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('research-card-image');
      }
      if (d === 1) {
        div.classList.add('research-card-title');
      }
      if (d === 2) {
        div.classList.add('research-card-data');
      }
      if (d === 3) {
        div.classList.add('research-card-button');
      }
    });
  });
}
