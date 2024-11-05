let isListenerAdded = false;
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
      }
      if (d === 3) {
        div.classList.add('market-card-button');
      }
    });
  });
  // Select the parent element that contains the list items
  if (!isListenerAdded) {
    document
      .querySelector('.mlow-market-head .market-card-filter')
      .addEventListener('click', function (e) {
        // Check if the clicked element is an <li>
        if (e.target.closest('li')) {
          e.preventDefault(); // Prevent the default action
          // Get the anchor tag within the clicked <li>
          const anchorText = e.target
            .closest('li')
            .querySelector('a').textContent;
          console.log(anchorText); // Log the anchor text
          getMarketGainers(anchorText);
          const listItems = this.querySelectorAll('li');
          listItems.forEach((item) => {
            item.style.backgroundColor = ''; // Reset background color
            item.style.fontWeight = '';
          });
          // Add background color to the clicked <li>
          e.target.closest('li').style.backgroundColor = '#fcaf17';
          e.target.closest('li').style.fontWeight = 'bold';
          isListenerAdded = true;
        }
      });
    isListenerAdded = true;
  }
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
    pagesize: '4',
  });

  fetch(`${url}?${params.toString()}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Market Gainers API Call Successful:', data);
      let gainersData = data?.data;
      populateMarketGainers(gainersData);
    })
    .catch((error) => {
      console.error('Market Gainers API Call Failed:', error);
    });
}
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
    const formattedPerChange = `${perChangeSign}${Math.abs(
      data.per_change
    ).toFixed(2)}%`;

    const row = `
      <tr>
        <td>${data.compname}</td>
        <td>Graph</td>
        <td>${formattedPrice}</td>
        <td style='color: ${
          data.per_change > 0 ? 'green' : 'red'
        };'>${formattedPerChange}</td>
      </tr>
    `;

    // Append the row to the table body
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}

getMarketGainers('1H');
