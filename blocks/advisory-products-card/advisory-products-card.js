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
        div.classList.add('mlow-button-view-more'); // Add mlow-button-view-more to the second div
        
        // Optional: Check for 'a' tag inside and remove 'button' class
        const aTag = div.querySelector('a');
        if (aTag && aTag.classList.contains('button')) {
          aTag.classList.remove('button');
        }
      }
      // You can extend this pattern for any other divs (e.g., for the third or fourth divs) if needed
    });
  });
}
