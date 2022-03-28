import './DonutChart.scss';

const DonutChart = () => {
  return (
    <div class="container">
      <p>Donut Chart</p>
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="400"
          cy="400"
          class="donut"
          r="300"
          stroke-width="60"
          stroke="#ff8c69"
          fill="none"
        />
        <circle
          cx="400"
          cy="400"
          class="donut"
          r="300"
          stroke-width="60"
          stroke="#ffff00"
          fill="none"
        />
        <circle
          cx="400"
          cy="400"
          class="donut"
          r="300"
          stroke-width="60"
          stroke="#008000"
          fill="none"
        />
        <circle
          cx="400"
          cy="400"
          class="donut"
          r="300"
          stroke-width="60"
          stroke="#87CEFA"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default DonutChart;
