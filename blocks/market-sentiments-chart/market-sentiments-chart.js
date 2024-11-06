export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('market-sentiments-div');
    [...row.children].forEach((div, index) => {
      div.classList.add(`market-sentiments-${index + 1}`);
      const paragraphs = div.querySelectorAll('p');
      paragraphs.forEach((p, pIndex) => {
        p.classList.add(`market-sentiment-text-${pIndex + 1}`);
      });
    });
  });
}
function getIndianIndices() {
  const url = 'https://research360api.motilaloswal.com/api/getapisdata';
  const apiName = 'GET_INDIAN_INDICES_WEB';
  fetch(`${url}?api_name=${apiName}&index_code=1`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('API Call Successful:', data);
      let marketData = data?.data;
      populateIndianIndices(marketData);
    })
    .catch((error) => {
      console.error('API Call Failed:', error);
    });
}
function populateIndianIndices(marketData) {
  const container = document.querySelector('.market-sentiments-chart');
  container.innerHTML = ''; // Clear any existing content
  marketData.forEach((data) => {
    const perChangeSign = data.per_change > 0 ? '+' : '-';
    const formattedDataChange = Math.abs(parseFloat(data.change).toFixed(2));
    const formattedPerChange = Math.abs(parseFloat(data.per_change).toFixed(2));
    // Create the HTML structure using template literals
    const marketDiv = `
      <div class='market-sentiments-div'>
        <div class='market-sentiments-1'>
          <p class='market-sentiment-text-1'>${data.index_nm}</p>
          <div style='display:flex; align-items:center; justify-content: space-between;'>
           <p class='market-sentiment-text-2'>${data.ltp}</p>
           <p class='market-sentiment-text-4'></p>
          </div>
          <p class='market-sentiment-text-3' style='color: ${
            data.per_change > 0 ? 'green' : 'red'
          };'>
            ${perChangeSign}${formattedDataChange} (${perChangeSign}${formattedPerChange}%)
          </p>
        </div>
      </div>
    `;
    // Append the populated HTML to the container
    container.insertAdjacentHTML('beforeend', marketDiv);
  });
  initCharts();

  setTimeout(() => {
    try {
      // eslint-disable-next-line no-undef
      $('.market-sentiments-chart').owlCarousel({
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
  }, 2500);
}
function initCharts() {
  const chartContainersIndian = document.querySelectorAll(
    '.market-sentiment-text-4'
  );
  chartContainersIndian.forEach((container) => {
    // Create a new chart in each container
    const chartIndian = LightweightCharts.createChart(container, {
      width: 50, // Adjust width as needed
      height: 30, // Adjust height as needed
      grid: {
        horzLines: {
          visible: false, // Hide horizontal grid lines
        },
        vertLines: {
          visible: false, // Hide vertical grid lines
        },
      },
      rightPriceScale: {
        visible: false,
      },
      timeScale: {
        visible: false,
      },
    });
    const lineSeries = chartIndian.addAreaSeries({
      topColor: '#2DB777',
      bottomColor: 'rgba(45, 183, 119, 0.2)',
      lineColor: '#2DB777',
      lineWidth: 2,
    });
    const originalData = [
      { time: '2018-10-19', value: 25.19 },
      { time: '2018-10-22', value: 26.87 },
      { time: '2018-10-23', value: 26.83 },
      { time: '2018-10-24', value: 26.78 },
      { time: '2018-10-25', value: 25.82 },
      { time: '2018-10-26', value: 25.81 },
      { time: '2018-10-29', value: 25.82 },
      { time: '2018-10-30', value: 25.71 },
      { time: '2018-10-31', value: 25.82 },
      { time: '2018-11-01', value: 25.72 },
      { time: '2018-11-02', value: 25.74 },
      { time: '2018-11-05', value: 25.81 },
      { time: '2018-11-06', value: 25.75 },
    ];

    // Slightly modify data values
    const data = originalData.map((item, index) => {
      return {
        time: item.time,
        value: parseFloat(
          (item.value + (Math.random() * 0.5 - 0.25)).toFixed(2)
        ), // Change value by a small random amount
      };
    });

    lineSeries.setData(data);
  });
  const chartElements = document.querySelectorAll('.tv-lightweight-charts');
  // Loop through each element and find the anchor tag within it
  chartElements.forEach((chartElement) => {
    const anchorTag = chartElement.querySelector('a'); // Select the anchor tag inside the current chart element
    if (anchorTag) {
      anchorTag.style.display = 'none'; // Hide the anchor tag
    }
  });
}
getIndianIndices();
