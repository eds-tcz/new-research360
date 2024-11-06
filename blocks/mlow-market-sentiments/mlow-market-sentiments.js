export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add('mlow-ms-section');
    if (r === 0) {
      row.classList.add('advance-decline');
      const table = row.querySelector('table');
      if (table) {
        table.classList.add('ad-tab');
        [...table.rows].forEach((tr) => {
          tr.classList.add('ad-row');
          [...tr.cells].forEach((td) => {
            td.classList.add('ad-cell');
          });
        });
      }
    }
    if (r === 1) {
      row.classList.add('market-sentiments');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('ms-heading');
        }
        if (d === 1) {
          div.classList.add('ms-head-filter');
        }
        if (d === 2) {
          div.classList.add('ms-content');
          // Remove the existing <p> tag inside ms-content
          const pTag = div.querySelector('p');
          if (pTag) {
            pTag.remove();
          }

          // Create and insert the circular chart
          const circularChart = document.createElement('div');
          circularChart.classList.add('circular-chart');
          circularChart.innerHTML = `
            <div class="chart-content">
              <span>Bearish</span>
              <span>45%</span>
            </div>
          `;
          div.appendChild(circularChart);
        }
        if (d === 3) {
          div.classList.add('ms-status');
          const tableA = div.querySelector('table');
          if (tableA) {
            tableA.classList.add('ms-status-tab');
            [...tableA.rows].forEach((tr, t) => {
              tr.classList.add('ms-status-row-'.concat(t + 1));
              [...tr.cells].forEach((td) => {
                td.classList.add('ms-status-cell');
              });
            });
          }
        }
      });
    }
    if (r === 2) {
      row.classList.add('cash-flows');
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add('cf-heading');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('cf-status-tab');
            [...table.rows].forEach((tr, t) => {
              tr.classList.add('cf-status-row-'.concat(t + 1));
              [...tr.cells].forEach((td) => {
                td.classList.add('cf-status-cell');
              });
            });
          }
        }
        if (d === 1) {
          div.classList.add('cf-graph');
        }
        if (d === 2) {
          div.classList.add('cf-heading-2');
          const table = div.querySelector('table');
          if (table) {
            table.classList.add('cf-status-tab');
            [...table.rows].forEach((tr, t) => {
              tr.classList.add('cf-status-row-'.concat(t + 1));
              [...tr.cells].forEach((td) => {
                td.classList.add('cf-status-cell');
              });
            });
          }
        }
        if (d === 3) {
          div.classList.add('cf-graph');
        }
        if (d === 4) {
          div.classList.add('cf-button');
        }
      });
    }
  });
}
function initDiiCashChart() {
  const chartContainers = document.getElementsByClassName('cf-graph');
// Ensure that there's a second container available
  if (chartContainers[1]) {
  const container = chartContainers[1]; // Accessing the second container

  // Create the chart inside the container
  const chart = LightweightCharts.createChart(container, {
    layout: {
      textColor: 'black',
      background: { type: 'solid', color: 'white' },
    },
    width: container.offsetWidth,
    height: 100, // Adjusted height for smaller bars
    rightPriceScale: {
      visible: false,
  },
  });

  // Add the histogram series with the specified color
  const histogramSeries = chart.addHistogramSeries({
    color: '#06c39b', // Updated color
    base: 0, // Baseline will still be 0 (negative values will go below this line)
    priceScaleId: '',
  });

  // Set the data for the histogram series with only negative values
  const data = [
    { value: 5, time: 1642425322 }, // All negative values
    { value: 10, time: 1642511722 },
    { value: 8, time: 1642598122 },
    { value: 12, time: 1642684522 },
    { value: 6, time: 1642770922 },
  ];

  histogramSeries.setData(data);

  // Adjust the time scale to fit the content and add spacing between bars
  chart.applyOptions({
    timeScale: {
      barSpacing: 20, // Adjust this value to increase/decrease space between bars
    },
  });

  // Fit the time scale to ensure the data is visible with the spacing
  chart.timeScale().fitContent();
  }
}
function initFiiCashChart() {
  const chartContainers = document.getElementsByClassName('cf-graph');
// Ensure that there's a second container available
  if (chartContainers[0]) {
  const container = chartContainers[0]; // Accessing the second container

  // Create the chart inside the container
  const chart = LightweightCharts.createChart(container, {
    layout: {
      textColor: 'black',
      background: { type: 'solid', color: 'white' },
    },
    width: container.offsetWidth,
    height: 100, // Adjusted height for smaller bars
    rightPriceScale: {
      visible: false,
  },
  });

  // Add the histogram series with the specified color
  const histogramSeries = chart.addHistogramSeries({
    color: 'red', // Updated color
    base: 0, // Baseline will still be 0 (negative values will go below this line)
    priceScaleId: '',
  });

  // Set the data for the histogram series with only negative values
  const data = [
    { value: -5, time: 1642425322 }, // All negative values
    { value: -10, time: 1642511722 },
    { value: -8, time: 1642598122 },
    { value: -12, time: 1642684522 },
    { value: -6, time: 1642770922 },
  ];

  histogramSeries.setData(data);

  // Adjust the time scale to fit the content and add spacing between bars
  chart.applyOptions({
    timeScale: {
      barSpacing: 20, // Adjust this value to increase/decrease space between bars
    },
  });

  // Fit the time scale to ensure the data is visible with the spacing
  chart.timeScale().fitContent();
  }
  const chartElements = document.querySelectorAll('.tv-lightweight-charts');
// Loop through each element and find the anchor tag within it
chartElements.forEach((chartElement) => {
    const anchorTag = chartElement.querySelector('a'); // Select the anchor tag inside the current chart element
    if (anchorTag) {
        anchorTag.style.display = 'none'; // Hide the anchor tag
    }
});

}
function bullishChart(){
  var options = {
    chart: {
      type: 'donut',
      height: 200
    },
    series: [13, 42, 45], // Percentage values
    labels: ['Bullish', 'Bearish', 'Neutral'],
    colors: ['#06c39b', '#ff4f6a', '#c9b4b3'], // Customize colors
    plotOptions: {
      pie: {
        donut: {
          size: '50%', // Adjust size of the donut
        }
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '16px',
        fontFamily: 'Helvetica, Arial, sans-serif',
      }
    },
    legend: {
      show: false // Hide the legend (right-side description)
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + '%';
        }
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector(".circular-chart"), options);
  chart.render();
}
setTimeout(() => {
  initDiiCashChart();
  initFiiCashChart();
  bullishChart();
}, 300);


