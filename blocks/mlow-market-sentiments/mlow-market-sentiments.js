export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    row.classList.add("mlow-ms-section");
    if (r === 0) {
      row.classList.add("advance-decline");
      const table = row.querySelector("table");
      if (table) {
        table.classList.add("ad-tab");
        [...table.rows].forEach((tr) => {
          tr.classList.add("ad-row");
          [...tr.cells].forEach((td) => {
            td.classList.add("ad-cell");
          });
        });
      }
    }
    if (r === 1) {
      row.classList.add("market-sentiments");
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add("ms-heading");
        }
        if (d === 1) {
          div.classList.add("ms-head-filter");
        }
        if (d === 2) {
          div.classList.add("ms-content");
          // Remove the existing <p> tag inside ms-content
          const pTag = div.querySelector("p");
          if (pTag) {
            pTag.remove();
          }

          // Create and insert the circular chart
          const circularChart = document.createElement("div");
          circularChart.classList.add("circular-chart");
          circularChart.innerHTML = `
            <div class="chart-content">
              <span>Bearish</span>
              <span>45%</span>
            </div>
          `;
          div.appendChild(circularChart);
        }
        if (d === 3) {
          div.classList.add("ms-status");
          const tableA = div.querySelector("table");
          if (tableA) {
            tableA.classList.add("ms-status-tab");
            [...tableA.rows].forEach((tr, t) => {
              tr.classList.add("ms-status-row-".concat(t + 1));
              [...tr.cells].forEach((td, i) => {
                td.classList.add("ms-status-cell");
              });
            });
          }
        }
      });
    }
    if (r === 2) {
      row.classList.add("cash-flows");
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add("cf-heading");
          const table = div.querySelector("table");
          if (table) {
            table.classList.add("cf-status-tab");
            [...table.rows].forEach((tr, t) => {
              tr.classList.add("cf-status-row-".concat(t + 1));
              [...tr.cells].forEach((td, i) => {
                td.classList.add("cf-status-cell");
              });
            });
          }
        }
        if (d === 1) {
          div.classList.add("cf-graph");
        }
        if (d === 2) {
          div.classList.add("cf-heading-2");
          const table = div.querySelector("table");
          if (table) {
            table.classList.add("cf-status-tab");
            [...table.rows].forEach((tr, t) => {
              tr.classList.add("cf-status-row-".concat(t + 1));
              [...tr.cells].forEach((td, i) => {
                td.classList.add("cf-status-cell");
              });
            });
          }
        }
        if (d === 3) {
          div.classList.add("cf-graph");
        }
        if (d === 4) {
          div.classList.add("cf-button");
        }
      });
    }
  });
}
