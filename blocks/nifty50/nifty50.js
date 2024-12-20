export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('nifty-cards');
    row.classList.add('grey-card');
    [...row.children].forEach((div, index) => {
      div.classList.add(`nifty-cards-${index + 1}`);
      const paragraphs = div.querySelectorAll('p');
      if (paragraphs.length >= 2) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('flex-wrapper');

        wrapper.appendChild(paragraphs[0]);
        wrapper.appendChild(paragraphs[1]);

        div.insertBefore(wrapper, paragraphs[2] || null);
      }
      paragraphs.forEach((p, pIndex) => {
        p.classList.add(`nifty-paragraph-${pIndex + 1}`);
      });
      if (paragraphs.length >= 3) {
        const hr = document.createElement('hr');
        div.appendChild(hr);
        const graphContainer = document.createElement('div');
        graphContainer.classList.add('graph-container');

        const timeNav = document.createElement('div');
        timeNav.classList.add('time-nav');
        ['1D', '1W', '1M', '3M'].forEach((time) => {
          const tab = document.createElement('button');
          tab.textContent = time;
          tab.classList.add('time-tab');
          if (time === '1D') tab.classList.add('active');
          timeNav.appendChild(tab);
        });
        const graph = document.createElement('div');
        graph.classList.add('graph-area');
        const timeLabels = document.createElement('div');
        timeLabels.classList.add('time-labels');
        ['10:04', '12:04', '13:34', '15:04'].forEach((time) => {
          const label = document.createElement('span');
          label.textContent = time;
          timeLabels.appendChild(label);
        });
        graph.appendChild(timeLabels);
        graphContainer.appendChild(timeNav);
        graphContainer.appendChild(graph);
        div.appendChild(graphContainer);
      }
    });
  });
}
function niftyChart(){
  const chartContainers = document.querySelectorAll('.graph-area');
  // Loop through each container and create a chart in it
  chartContainers.forEach((container) => {
  const chart = LightweightCharts.createChart(container, {
    width: 400,
    height: 120
  });
  const lineSeries = chart.addAreaSeries({
    topColor: '#2DB777',
    bottomColor: 'rgba(45, 183, 119, 0.2)',
    lineColor: '#2DB777',
    lineWidth: 2,
});
  const data = [
    { time: '2018-10-19', value: 26.19 },
    { time: '2018-10-22', value: 25.87 },
    { time: '2018-10-23', value: 25.83 },
    { time: '2018-10-24', value: 25.78 },
    { time: '2018-10-25', value: 25.82 },
    { time: '2018-10-26', value: 25.81 },
    { time: '2018-10-29', value: 25.82 },
    { time: '2018-10-30', value: 25.71 },
    { time: '2018-10-31', value: 25.82 },
    { time: '2018-11-01', value: 25.72 },
    { time: '2018-11-02', value: 25.74 },
    { time: '2018-11-05', value: 25.81 },
    { time: '2018-11-06', value: 25.75 },
    { time: '2018-11-07', value: 25.73 },
    { time: '2018-11-08', value: 25.75 },
    { time: '2018-11-09', value: 25.75 },
    { time: '2018-11-12', value: 25.76 },
    { time: '2018-11-13', value: 25.8 },
    { time: '2018-11-14', value: 25.77 },
    { time: '2018-11-15', value: 25.75 },
    { time: '2018-11-16', value: 25.75 },
    { time: '2018-11-19', value: 25.75 },
    { time: '2018-11-20', value: 25.72 },
    { time: '2018-11-21', value: 25.78 },
    { time: '2018-11-23', value: 25.72 },
    { time: '2018-11-26', value: 25.78 },
    { time: '2018-11-27', value: 25.85 },
    { time: '2018-11-28', value: 25.85 },
    { time: '2018-11-29', value: 25.55 },
    { time: '2018-11-30', value: 25.41 },
    { time: '2018-12-03', value: 25.41 },
    { time: '2018-12-04', value: 25.42 },
    { time: '2018-12-06', value: 25.33 },
    { time: '2018-12-07', value: 25.39 },
    { time: '2018-12-10', value: 25.32 },
    { time: '2018-12-11', value: 25.48 },
    { time: '2018-12-12', value: 25.39 },
    { time: '2018-12-13', value: 25.45 },
    { time: '2018-12-14', value: 25.52 },
    { time: '2018-12-17', value: 25.38 },
    { time: '2018-12-18', value: 25.36 },
    { time: '2018-12-19', value: 25.65 },
    { time: '2018-12-20', value: 25.7 },
    { time: '2018-12-21', value: 25.66 },
    { time: '2018-12-24', value: 25.66 },
    { time: '2018-12-26', value: 25.65 },
    { time: '2018-12-27', value: 25.66 },
    { time: '2018-12-28', value: 25.68 },
    { time: '2018-12-31', value: 25.77 },
    { time: '2019-01-02', value: 25.72 },
    { time: '2019-01-03', value: 25.69 },
    { time: '2019-01-04', value: 25.71 },
    { time: '2019-01-07', value: 25.72 },
    { time: '2019-01-08', value: 25.72 },
    { time: '2019-01-09', value: 25.66 },
    { time: '2019-01-10', value: 25.85 },
    { time: '2019-01-11', value: 25.92 },
    { time: '2019-01-14', value: 25.94 },
    { time: '2019-01-15', value: 25.95 },
    { time: '2019-01-16', value: 26.0 },
    { time: '2019-01-17', value: 25.99 },
    { time: '2019-01-18', value: 25.6 },
    { time: '2019-01-22', value: 25.81 },
    { time: '2019-01-23', value: 25.7 },
    { time: '2019-01-24', value: 25.74 },
    { time: '2019-01-25', value: 25.8 },
    { time: '2019-01-28', value: 25.83 },
    { time: '2019-01-29', value: 25.7 },
    { time: '2019-01-30', value: 25.78 },
    { time: '2019-01-31', value: 25.35 },
    { time: '2019-02-01', value: 25.6 },
    { time: '2019-02-04', value: 25.65 },
    { time: '2019-02-05', value: 25.73 },
    { time: '2019-02-06', value: 25.71 },
    { time: '2019-02-07', value: 25.71 },
    { time: '2019-02-08', value: 25.72 },
    { time: '2019-02-11', value: 25.76 },
    { time: '2019-02-12', value: 25.84 },
    { time: '2019-02-13', value: 25.85 },
    { time: '2019-02-14', value: 25.87 },
    { time: '2019-02-15', value: 25.89 },
    { time: '2019-02-19', value: 25.9 },
    { time: '2019-02-20', value: 25.92 },
    { time: '2019-02-21', value: 25.96 },
    { time: '2019-02-22', value: 26.0 },
    { time: '2019-02-25', value: 25.93 },
    { time: '2019-02-26', value: 25.92 },
    { time: '2019-02-27', value: 25.67 },
    { time: '2019-02-28', value: 25.79 },
    { time: '2019-03-01', value: 25.86 },
    { time: '2019-03-04', value: 25.94 },
    { time: '2019-03-05', value: 26.02 },
    { time: '2019-03-06', value: 25.95 },
    { time: '2019-03-07', value: 25.89 },
    { time: '2019-03-08', value: 25.94 },
    { time: '2019-03-11', value: 25.91 },
    { time: '2019-03-12', value: 25.92 },
    { time: '2019-03-13', value: 26.0 },
    { time: '2019-03-14', value: 26.05 },
    { time: '2019-03-15', value: 26.11 },
    { time: '2019-03-18', value: 26.1 },
    { time: '2019-03-19', value: 25.98 },
    { time: '2019-03-20', value: 26.11 },
    { time: '2019-03-21', value: 26.12 },
    { time: '2019-03-22', value: 25.88 },
    { time: '2019-03-25', value: 25.85 },
    { time: '2019-03-26', value: 25.72 },
    { time: '2019-03-27', value: 25.73 },
    { time: '2019-03-28', value: 25.8 },
    { time: '2019-03-29', value: 25.77 },
    { time: '2019-04-01', value: 26.06 },
    { time: '2019-04-02', value: 25.93 },
    { time: '2019-04-03', value: 25.95 },
    { time: '2019-04-04', value: 26.06 },
    { time: '2019-04-05', value: 26.16 },
    { time: '2019-04-08', value: 26.12 },
    { time: '2019-04-09', value: 26.07 },
    { time: '2019-04-10', value: 26.13 },
    { time: '2019-04-11', value: 26.04 },
    { time: '2019-04-12', value: 26.04 },
    { time: '2019-04-15', value: 26.05 },
    { time: '2019-04-16', value: 26.01 },
    { time: '2019-04-17', value: 26.09 },
    { time: '2019-04-18', value: 26.0 },
    { time: '2019-04-22', value: 26.0 },
    { time: '2019-04-23', value: 26.06 },
    { time: '2019-04-24', value: 26.0 },
    { time: '2019-04-25', value: 25.81 },
    { time: '2019-04-26', value: 25.88 },
    { time: '2019-04-29', value: 25.91 },
    { time: '2019-04-30', value: 25.9 },
    { time: '2019-05-01', value: 26.02 },
    { time: '2019-05-02', value: 25.97 },
    { time: '2019-05-03', value: 26.02 },
    { time: '2019-05-06', value: 26.03 },
    { time: '2019-05-07', value: 26.04 },
    { time: '2019-05-08', value: 26.05 },
    { time: '2019-05-09', value: 26.05 },
    { time: '2019-05-10', value: 26.08 },
    { time: '2019-05-13', value: 26.05 },
    { time: '2019-05-14', value: 26.01 },
    { time: '2019-05-15', value: 26.03 },
    { time: '2019-05-16', value: 26.14 },
    { time: '2019-05-17', value: 26.09 },
    { time: '2019-05-20', value: 26.01 },
    { time: '2019-05-21', value: 26.12 },
    { time: '2019-05-22', value: 26.15 },
    { time: '2019-05-23', value: 26.18 },
    { time: '2019-05-24', value: 26.16 },
    { time: '2019-05-28', value: 26.23 },
   ];
  lineSeries.setData(data);
   });
}
function getNifty50Data(indexCode) {
  const url = 'https://research360api.motilaloswal.com/api/getapisdata';
  const apiName = 'EQ_INDEX_SNAPSHOT_WEB';

  fetch(`${url}?api_name=${apiName}&index_code=${indexCode}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const indexData = data.data[0];
      const nifty50Card = document.querySelector('.nifty50 .nifty-cards-1');
      nifty50Card.querySelector('.nifty-paragraph-1').innerText = indexData.co_name || 'NIFTY 50';
      nifty50Card.querySelector(
        '.nifty-paragraph-2',
      ).innerText = `${new Date().toLocaleTimeString()}`;
      nifty50Card.querySelector(
        '.nifty-paragraph-3',
      ).innerText = `${indexData.ltp}`;
      const additionalInfo = document.createElement('p');
      nifty50Card.appendChild(additionalInfo);
      niftyChart();
      document.querySelectorAll('.nifty-cards.grey-card').forEach(card => card.classList.remove('grey-card'));
    });
  // .catch((error) => {
  //   console.error('API Call Failed:', error);
  // });
}
setTimeout(() => {
  getNifty50Data('20559');
}, 4000);

