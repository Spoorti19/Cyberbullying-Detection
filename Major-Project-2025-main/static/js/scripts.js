// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10, 8, 6, 4, 2, 9, 7, 5, 3, 1],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#e36643', '#28a745', '#f39c12', '#8e44ad', '#e74c3c'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Aspirin', 'Paracetamol', 'Ibuprofen', 'Amoxicillin', 'Cetirizine', 'Metformin', 'Diazepam', 'Atorvastatin', 'Loratadine', 'Losartan'],
  },
  yaxis: {
    title: {
      text: 'Total profit for medicine',
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Revenue',
      data: [310, 400, 280, 510, 420, 1090, 1000, 600, 770, 850],
    },
    {
      name: 'Profit',
      data: [110, 320, 450, 320, 340, 520, 410, 650, 900, 700],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Revenue',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Profit',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();
