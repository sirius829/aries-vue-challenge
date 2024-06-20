import Chart from 'chart.js/auto';

export function drawGraph(ctx, graphData) {
  const labels = graphData.map(data => data.price);
  const data = graphData.map(data => data.totalProfitLoss);

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Profit/Loss',
        data: data,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        pointRadius: 0,  // Remove points
        lineTension: 0.1  // Smooth the line
      }]
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Price: ${context.label}, P/L: ${context.raw}`;
            }
          }
        },
        zoom: {
          pan: {
            enabled: true,
            mode: 'xy'
          },
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true
            },
            mode: 'xy'
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Underlying Price at Expiry'
          }
        },
        y: {
          title: {
            display: true,
            text: 'Profit/Loss'
          }
        }
      }
    }
  });
}
