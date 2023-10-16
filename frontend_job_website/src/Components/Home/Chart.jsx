import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#000",
        font: {
          size: 16, // Set the font size for x-axis labels
        },
      },
    },
  },
  tooltip: {
    enabled: true,
    callbacks: {
      title: function (tooltipItems, data) {
        const dataIndex = tooltipItems[0].dataIndex; // Get the index of the hovered data point
        return datas[dataIndex].salary; // Display the salary range in the tooltip title
      },
    },
  },
};
// const labels = ["Beginner", "Middle", "Senior", "TOP"];
const datas = [
  {
    level: "Beginner",
    salary: "1000 - 1500",
  },
  {
    level: "Middle",
    salary: "2000 - 4500",
  },
  {
    level: "Senior",
    salary: "5000 - 6500",
  },
  {
    level: "TOP",
    salary: "7000 - 10000",
  },
];

const labels = datas.map((lv) => lv.level);

export const data = {
  labels,
  datasets: [
    {
      label: "Salary for every job by position",
      data: datas.map((lv) => {
        const salaryRange = lv.salary.split("-");
        return (parseInt(salaryRange[0]) + parseInt(salaryRange[1])) / 2;
      }),

      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function Chart() {
  return (
    <div className="max-md:w-96 w-full max-sm:w-[300px]">
      <Line options={options} data={data} />
    </div>
  );
}

export default Chart;
