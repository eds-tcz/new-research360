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
          div.setAttribute('id', 'fiiCash');
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
          div.setAttribute('id', 'diiCash');
        }
        if (d === 4) {
          div.classList.add('cf-button');
        }
      });
    }
  });
}
function initFiiCashChart() {
  var options = {
    series: [{
      data: [-21, -22, -10, -28, -16] // Negative values for 5 bars
    }],
    chart: {
      height: 100, // Reduced chart height
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      },
      toolbar: {
        show: false // Disable the toolbar at the top
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%', // Increased column width for wider bars
        distributed: true,
        colors: {
          ranges: [{
            from: -Infinity,
            to: 0,
            color: '#ff4f6a' // Red color for negative values
          }]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['30', 'Oct'],
      ['31', 'Oct'],
      ['1', 'Nov'],
      ['4', 'Nov']
      ],
      labels: {
        show: false // Hide the horizontal category labels
      }
    },
    yaxis: {
      show: false // Hide the left vertical values (y-axis labels)
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#fiiCash"), options);
  chart.render();
  
}
function initDiiCashChart() {
  var options = {
    series: [{
      data: [21, 22, 10, 28, 16], // Values for 5 bars
    }],
    chart: {
      height: 100, // Reduced chart height
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      },
      toolbar: {
        show: false // Disable the toolbar at the top
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%', // Adjust column width for wider bars
        distributed: true
      }
    },
    colors: ['#06c39b'], // Green color for all bars
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        ['30', 'Oct'],
        ['31', 'Oct'],
        ['1', 'Nov'],
        ['4', 'Nov']
      ],
      labels: {
        show: false // Hide the horizontal category labels
      }
    },
    yaxis: {
      show: false // Hide the left vertical values (y-axis labels)
    }
  };

  var chart = new ApexCharts(document.querySelector("#diiCash"), options);
  chart.render();
}
function bullishChart() {
  var options = {
    chart: {
      type: 'donut',
      height: 200,
    },
    series: [13, 45, 42], // Values for each category
    labels: ['Bullish', 'Bearish', 'Neutral'],
    colors: ['#06c39b', '#ff4f6a', '#c9b4b3'], // Customize colors
    plotOptions: {
      pie: {
        donut: {
          size: '50%', // Adjust size of the donut
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: -10,
              formatter: function() {
                return 'Neutral';
              },
              style: {
                fontSize: '16px',
                color: '#333',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }
            },
            value: {
              show: true,
              offsetY: 10,
              formatter: function() {
                return '42%'; // Static value to display permanently
              },
              style: {
                fontSize: '20px',
                color: '#333',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }
            },
            total: {
              show: true,
              label: 'Neutral',
              formatter: function() {
                return '42%';
              },
              style: {
                fontSize: '20px',
                color: '#333',
                fontFamily: 'Helvetica, Arial, sans-serif'
              }
            }
          }
        }
      }
    },
    dataLabels: {
      enabled: false // Disable data labels to hide percentage around the chart
    },
    legend: {
      show: false // Hide the legend
    },
    tooltip: {
      enabled: false // Disable tooltip on hover
    }
  };
  
  var chart = new ApexCharts(document.querySelector(".circular-chart"), options);
  chart.render();
}
function generateProgressBarHTML(leftValue, centerValue, progressLeft, progressRight) {
  return `
      <div class="progressbar">
          <div style="display: flex; justify-content: center; align-items: center;">
              <div style="color: #06c39b; font-family: 'Roboto'; font-size: 16px; margin-right: 8px;">${leftValue}</div>
              <div style="color: #ff4f6a; font-family: 'Roboto'; font-size: 14px; padding-left: 4px; padding-right: 4px;">${centerValue}</div>
          </div>
          <div class="progress sector-change" style="margin-top: 2px;">
              <div role="progressbar" style="width: ${progressLeft}%; background: #06c39b;" aria-valuenow="${progressLeft}" aria-valuemin="0" aria-valuemax="100"></div>
              <div role="progressbar" style="width: ${progressRight}%; background: #ff4f6a;" aria-valuenow="${progressRight}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
      </div>
  `;
}
const progressBarHTML = generateProgressBarHTML(86, 13, 80, 20);
// Append this HTML to a specific cell in your table
function appendProgressBars() {
  const adRows = document.querySelectorAll('.ad-tab .ad-row:not(:first-child)');
  
  adRows.forEach((row, index) => {
      const leftValue = Math.floor(Math.random() * 100); // Replace with your logic
      const centerValue = Math.floor(Math.random() * 100); // Replace with your logic
      const progressLeft = Math.floor(Math.random() * 100); // Replace with your logic
      const progressRight = 100 - progressLeft; // Completes the bar to 100%

      // Generate the HTML for each row
      const progressBarHTML = generateProgressBarHTML(leftValue, centerValue, progressLeft, progressRight);
      
      const thirdCell = row.querySelectorAll('.ad-cell')[2];
      if (thirdCell) {
          thirdCell.innerHTML = progressBarHTML;
      }
  });
}
setTimeout(() => {
  initDiiCashChart();
  initFiiCashChart();
  bullishChart();
  appendProgressBars();
}, 300);


