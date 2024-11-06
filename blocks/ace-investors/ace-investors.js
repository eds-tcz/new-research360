export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('ace-investors-head');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('market-card-title');
      }
      if (d === 1) {
        div.classList.add('market-card-filter');
      }
      if (d === 2) {
        div.classList.add('market-card-table');
        div.classList.add('market-card-table-wrap');
      }
      if (d === 3) {
        div.classList.add('market-card-button');
      }
    });
  });
}