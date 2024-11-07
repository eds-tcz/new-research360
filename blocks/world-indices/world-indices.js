export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('world-indices-div');
    row.classList.add('grey-card'); 
    [...row.children].forEach((div, index) => {
      div.classList.add(`world-indices-${index + 1}`);
      const paragraphs = div.querySelectorAll('p');
      paragraphs.forEach((p, pIndex) => {
        p.classList.add(`world-indices-text-${pIndex + 1}`);
      });
      if (index === 0 && r === 0) {
        // const hr = document.createElement('hr');
      }
    });
  });
}
function formatTimeTo12Hour(time) {
  const [hours, minutes] = time.split(':').map(Number);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHour = hours % 12 || 12; // Convert 0 to 12 for midnight/noon
  return `${formattedHour}:${minutes?.toString()?.padStart(2, '0')} ${ampm}`;
}
async function getWorldIndices() {
  const url = 'https://research360api.motilaloswal.com/api/getapisdata';
  const apiName = 'GET_WORLDINDICES';
  fetch(`${url}?api_name=${apiName}&index_code=0`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('API Call Successful:', data);
      let marketData = data?.data;
      populateWorldIndices(marketData);
    })
    .catch((error) => {
      console.error('API Call Failed:', error);
    });
}
function populateWorldIndices(marketData) {
  let countryImages = [
    "https://www.research360.in/dist/images/ind_India.png",
    "https://www.research360.in/dist/images/us_United%20States.svg",
    "https://www.research360.in/dist/images/us_United%20States.svg",
    "https://www.research360.in/dist/images/gb_United%20Kingdom.svg",
    "https://www.research360.in/dist/images/us_United%20States.svg",
    "https://www.research360.in/dist/images/de_Germany.svg",
    "https://www.research360.in/dist/images/de_Germany.svg",
    "https://www.research360.in/dist/images/hk_Hong%20Kong.svg",
    "https://www.research360.in/dist/images/us_United%20States.svg",
    "https://www.research360.in/dist/images/ch_Switzerland.svg",
    "https://www.research360.in/dist/images/ch_Switzerland.svg"
  ]
  const container = document.querySelector('.world-indices');
  container.innerHTML = ''; // Clear any existing content
  marketData.forEach((data, index) => {
    const image = countryImages[index];
    const perChangeSign = data.change_per > 0 ? '+' : '-';
    const formattedDataChange = Math.abs(parseFloat(data.chnge).toFixed(2));
    const formattedPerChange = Math.abs(parseFloat(data.change_per).toFixed(2));
    // Create the HTML structure using template literals
    const marketDiv = `
      <div class='world-indices-div'>
        <div class='world-indices-1'>
        <div style="display:flex;justify-content: space-between">
        <p class='world-indices-text-1'>${data.index_name}</p>
        <p class='world-indices-image'><img src="${image}" alt="Country Flag" style="width: 40px; height: 25px; margin-right: 10px;" /></p>
        </div>
          <p class='world-indices-text-2'>${data.last}</p>
          <p class='world-indices-text-3' style='color: ${
            data.change_per > 0 ? 'green' : 'red'
          };'>
            ${perChangeSign}${formattedDataChange} (${perChangeSign}${formattedPerChange}%)
          </p>
          <p class='world-indices-text-4'>${formatTimeTo12Hour(data.dtm)}</p>
        </div>
      </div>
    `;
    document.querySelectorAll('.world-indices-div.grey-card').forEach(card => card.classList.remove('grey-card'));
    // Append the populated HTML to the container
    container.insertAdjacentHTML('beforeend', marketDiv);
  });
      try {
        // eslint-disable-next-line no-undef
        $('.world-indices').owlCarousel({
          loop: false,
          margin: 15,
          slideBy: 6,
          // autoHeight: true,
          dots: false,
          nav: true,
          // responsiveClass: true,
          responsive: {
            0: { items: 2 },
            768: { items: 4 },
            992: { items: 4 },
            1200: { items: 6 },
          },
        });
      } catch (error) {
        console.log(error.message);
      }
    // },2000);
}
setTimeout(() => {
    getWorldIndices();
}, 4000); // Delay the API call by 3 seconds

