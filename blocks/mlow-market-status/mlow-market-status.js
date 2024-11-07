export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('mlow-market-head');
    [...row.children].forEach((div, d) => {
      if (d === 0) {
        div.classList.add('market-card-title');
      }
      if (d === 1) {
        div.classList.add('market-card-filter');
      }
      if (d === 2) {
        div.classList.add('market-card-table');
        const table = div.querySelector('table');
        if (table) {
          const tds = table.querySelectorAll('td');
          tds.forEach((td) => {
            if (!td.textContent.trim()) { // Check if <td> is empty
              td.classList.add('looserChart'); // Add class for empty <td>
            }
          });
        }

      }
      if (d === 3) {
        div.classList.add('market-card-button');
      }
    });
  });
}
function getMarketGainers(period) {
  const url = 'https://research360api.motilaloswal.com/api/getapisdata';
  const apiName = 'EQ_MKT_GAINERS_LOSERS_WEB';
  const params = new URLSearchParams({
    api_name: apiName,
    exchange: 'NSE',
    index_code: '22115',
    fno_flag: '',
    mcap_type: '',
    price_start: '',
    price_end: '',
    sector: '',
    industry: '',
    flag: 'G',
    period: period,
    sortcolumn: 'per_change',
    sortdirection: 'DESC',
    search: '',
    pagenumber: '1',
    pagesize: '4'
  });

  fetch(`${url}?${params.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Market Gainers API Call Successful:', data);
      let gainersData = data?.data;
      populateMarketGainers(gainersData);
    })
    .catch(error => {
      console.error('Market Gainers API Call Failed:', error);
    });
};
function populateMarketGainers(gainersData) {
  const tableBody = document.querySelector('.market-card-table tbody');

  // Clear existing rows except for the header row
  tableBody.innerHTML = `
    <tr>
      <td>Company</td>
      <td>Intraday</td>
      <td>Price</td>
      <td>1D Chg%</td>
    </tr>
  `;

  // Populate the table with new rows from gainersData
  gainersData.forEach((data) => {
    const perChangeSign = data.per_change > 0 ? '+' : '-';
    const formattedPrice = parseFloat(data.ltp).toFixed(2);
    const formattedPerChange = `${perChangeSign}${Math.abs(data.per_change).toFixed(2)}%`;

    const row = `
      <tr>
        <td>${data.compname}</td>
        <td><img class="gainerImage"/></td>
        <td>${formattedPrice}</td>
        <td style='color: ${data.per_change > 0 ? 'green' : 'red'};'>${formattedPerChange}</td>
      </tr>
    `;

    // Append the row to the table body
    tableBody.insertAdjacentHTML('beforeend', row);
  });
  initGainerImageCharts();
  initLooserImageCharts();
};
function initGainerImageCharts() {
  // Select all the images with the class 'gainerImage'
  const gainerImages = document.querySelectorAll('.gainerImage');

  gainerImages.forEach((image) => {
    // Create a chart container to replace the image
    const chartContainer = document.createElement('div');
    chartContainer.style.width = '100%';  // Full width of the container
    chartContainer.style.height = '40px'; // Fixed height for better alignment
    chartContainer.style.display = 'flex'; // Use flexbox for centering the chart
    //chartContainer.style.alignItems = 'center'; // Vertically align the chart in the container
    chartContainer.style.justifyContent = 'center'; // Horizontally center the chart
    chartContainer.style.marginLeft = "-10px";

    // Replace the image with the new chart container
    image.parentNode.replaceChild(chartContainer, image);

    // Create a new LightweightChart inside the chart container
    const chart = LightweightCharts.createChart(chartContainer, {
      width: chartContainer.clientWidth,  // Full width of the container
      height: chartContainer.clientHeight, // Full height of the container
      grid: {
        horzLines: {
          visible: false,  // Hide horizontal grid lines
        },
        vertLines: {
          visible: false,  // Hide vertical grid lines
        },
      },
      rightPriceScale: {
        visible: false,  // Hide the price scale on the right
      },
      timeScale: {
        visible: false,  // Hide the time scale
      },
    });

    // Create a series for the chart
    const lineSeries = chart.addAreaSeries({
      topColor: '#2DB777',
      bottomColor: 'rgba(45, 183, 119, 0.2)',
      lineColor: '#2DB777',
      lineWidth: 2,
    });

    // Example original data
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
    const data = originalData.map((item) => {
      return {
        time: item.time,
        value: parseFloat(
          (item.value + (Math.random() * 0.5 - 0.25)).toFixed(2)
        ), // Slight modification in the value
      };
    });

    // Set the modified data to the chart
    lineSeries.setData(data);
    // Hide anchor tags if any inside the chart element
    const chartElements = document.querySelectorAll('.tv-lightweight-charts');
    chartElements.forEach((chartElement) => {
      const anchorTag = chartElement.querySelector('a'); // Select the anchor tag inside the current chart element
      if (anchorTag) {
        anchorTag.style.display = 'none'; // Hide the anchor tag
      }
      chartElement.style.display = 'block'; // Ensure block display to allow left alignment
      chartElement.style.marginLeft = '0'; // Reset any left margin
      chartElement.style.paddingLeft = '0'; // Reset any left padding
    });
  });
} 
function initLooserImageCharts() {
  const looserChart = document.querySelectorAll('.looserChart');
  looserChart.forEach((image) => {
    const chartContainer = document.createElement('div');
    chartContainer.style.width = '100%';  // Full width of the container
    chartContainer.style.height = '56px'; // Fixed height for better alignment
    chartContainer.style.display = 'flex'; // Use flexbox for centering the chart
    //chartContainer.style.alignItems = 'center'; // Vertically align the chart in the container
    chartContainer.style.justifyContent = 'center'; // Horizontally center the chart
    chartContainer.style.marginLeft = "-10px";

    // Replace the image with the new chart container
    image.parentNode.replaceChild(chartContainer, image);

    // Create a new LightweightChart inside the chart container
    const chart = LightweightCharts.createChart(chartContainer, {
      width: chartContainer.clientWidth,  // Full width of the container
      height: chartContainer.clientHeight, // Full height of the container
      grid: {
        horzLines: {
          visible: false,  // Hide horizontal grid lines
        },
        vertLines: {
          visible: false,  // Hide vertical grid lines
        },
      },
      rightPriceScale: {
        visible: false,  // Hide the price scale on the right
      },
      timeScale: {
        visible: false,  // Hide the time scale
      },
    });

    // Create a series for the chart
    const lineSeries = chart.addAreaSeries({
      topColor: '#ff4f6a',
      bottomColor: 'rgba(255, 79, 106, 0.3)',
      lineColor: '#ff4f6a',
      lineWidth: 2,
    });

    // Example original data
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
    const data = originalData.map((item) => {
      return {
        time: item.time,
        value: parseFloat(
          (item.value + (Math.random() * 0.5 - 0.25)).toFixed(2)
        ), // Slight modification in the value
      };
    });

    // Set the modified data to the chart
    lineSeries.setData(data);
    // Hide anchor tags if any inside the chart element
    const chartElements = document.querySelectorAll('.tv-lightweight-charts');
    chartElements.forEach((chartElement) => {
      const anchorTag = chartElement.querySelector('a'); // Select the anchor tag inside the current chart element
      if (anchorTag) {
        anchorTag.style.display = 'none'; // Hide the anchor tag
      }
      chartElement.style.display = 'block'; // Ensure block display to allow left alignment
      chartElement.style.marginLeft = '0'; // Reset any left margin
      chartElement.style.paddingLeft = '0'; // Reset any left padding
    });
  });
} 
setTimeout(() => {
  getMarketGainers('1H');
}, 4000);


