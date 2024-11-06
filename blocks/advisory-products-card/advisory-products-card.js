export default function decorate(block) {
  // Loop through all the .heading-advisory-button divs inside the block
  [...block.children].forEach((row, r) => {
    row.classList.add('heading-advisory-button');

    // Loop through each <div> inside the .heading-advisory-button
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('mlow-heading-h2'); // Add mlow-heading-h2 to the first div
      }
      if (d === 1) {
        div.classList.add('mlow-button-view-more');

        const aTag = div.querySelector('a');
        if (aTag && aTag.classList.contains('button')) {
          aTag.classList.remove('button');
        }
      }
      if (d === 2) {
        div.classList.add('advisory-div3'); // Add mlow-heading-h2 to the first div
      }
      if (d === 3) {
        div.classList.add('adisory-div4'); // Add mlow-heading-h2 to the first div
      }
    });
  });
  document.querySelectorAll('.advisory-products-card td').forEach((td) => {
    if (td.textContent.trim() === 'Open') {
      td.classList.add('open-state');
    }
  });
  // Get the second instance of heading-advisory-button
  const headingAdvisoryButton = document.getElementsByClassName(
    'heading-advisory-button'
  )[1];
  // Then, within this element, get the mlow-button-view-more div
  const mlowButtonViewMore = headingAdvisoryButton.querySelector(
    '.mlow-button-view-more'
  );
  // 1. Remove blur from the second <td> in the first <tr> in .mlow-button-view-more
  // Remove blur on the image within mlow-button-view-more
  const img = mlowButtonViewMore.querySelector('img');
  if (img) {
    img.style.filter = 'none';
    img.style.opacity = '1'; // Reset opacity if needed
  }
  // Remove blur on the second <td> in the first <tr>
  const secondTd = mlowButtonViewMore.querySelector(
    'table tbody tr td:nth-child(2)'
  );
  if (secondTd) {
    secondTd.style.filter = 'none';
  }
  const secondTds = mlowButtonViewMore.querySelector(
    'table tbody tr:nth-child(2) td:nth-child(2)'
  );
  if (secondTds) {
    secondTds.style.filter = 'none';
  }
  // Remove blur on all <code> elements
  const codeElements = mlowButtonViewMore.querySelectorAll(
    'table tbody tr td code'
  );
  codeElements.forEach((code) => {
    code.style.filter = 'none';
  });

  // 2. Remove blur from the first <td> in the first <tr> in .adisory-div4
  const adisoryDiv4 = headingAdvisoryButton.querySelector('.adisory-div4');
  const firstTdAdisoryDiv4 = adisoryDiv4?.querySelector(
    'table tbody tr:first-child :first-child'
  );
  if (firstTdAdisoryDiv4) {
    firstTdAdisoryDiv4.style.filter = 'none';
  }
  const firstTdAdisoryDiv41 = adisoryDiv4?.querySelector(
    'table tbody tr:first-child :first-child code'
  );
  if (firstTdAdisoryDiv41) {
    firstTdAdisoryDiv41.style.filter = 'none';
  }
  // 3. Remove blur from <code> inside the <td> elements in the second <tr> in .advisory-div3
  const advisoryDiv3 = headingAdvisoryButton.querySelector('.advisory-div3');
  const secondRowCodeElements = advisoryDiv3?.querySelectorAll(
    'table tbody tr:nth-child(2) td code'
  );
  if (secondRowCodeElements) {
    secondRowCodeElements.forEach((code) => {
      code.style.filter = 'none';
    });
  }
}
