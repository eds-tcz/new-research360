export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('iap-image-card');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('iap-card-image');
      }
      if (d === 1) {
        div.classList.add('iap-card-title');
        const table = div.querySelector('table');
        if (table) {
          const tds = table.querySelectorAll('td');
          tds.forEach((td) => {
            // Check if the text inside the <td> is "Horizon 3-5 Years"
            if (td.textContent.includes("3-5 Years")) {
              // Replace "3-5 Years" with a bold version wrapped in <strong>
              td.innerHTML = td.innerHTML.replace('3-5 Years', '<strong style="font-weight: 700; color: black">3-5 Years</strong>');
            } else if(td.textContent.includes("250000.0000")){
              td.innerHTML = td.innerHTML.replace('₹ 250000.0000', '<strong style="font-weight: 700; color: black">₹ 250000.0000</strong>');
            }  else if(td.textContent.includes("Aggressive")){
              td.innerHTML = td.innerHTML.replace('Aggressive', '<strong style="font-weight: 700; color: black">Aggressive</strong>');
            }
          });
        }
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
