export const plotConfig = {
    type: 'line',
    data: {
      datasets: [
        { 
          data: [],
          borderColor: "#3cba9f",
          borderJoinStyle: 'miter',
          borderCapStyle: 'square',
          fill: true,
          label: 'socket Value 1'
        },
        { 
          data: [],
          borderColor: "#cc88cc",
          borderJoinStyle: 'miter',
          borderCapStyle: 'square',
          fill: true,
          label: 'socket Value 2'
        },
        { 
          data: [],
          borderColor: "#88cc88",
          borderJoinStyle: 'miter',
          borderCapStyle: 'square',
          fill: true,
          label: 'socket Value 3'
        }
      ]
    },
    options: {
      legend: {
        display: true
      },
      scales: {
        type: 'linear',
        xAxes: [{
          display: true,
          maxBarThickness: 50,
          distribution: 'series',
          barThickness: 50
        }],
        yAxes: [{
          display: true,
          maxBarThickness: 50,
          barThickness: 50
        }],
      }
    }
  };
  