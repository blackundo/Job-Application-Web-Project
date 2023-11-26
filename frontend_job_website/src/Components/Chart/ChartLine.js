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
import { faker } from "@faker-js/faker";
function ChartLine() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "2023-10-26",
    "2023-10-27",
    "2023-10-28",
    "2023-10-29",
    "2023-10-30",
    "2023-10-31",
    "2023-11-1",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: labels.map(() => faker.number.int({ min: 1000, max: 3000 })),
        borderColor: "#000084",
        backgroundColor: "#000084",
      },
      {
        label: "Total Jobs",
        data: labels.map(() => faker.number.int({ min: 1000, max: 3000 })),
        borderColor: "#1CB8FF",
        backgroundColor: "#1CB8FF",
      },
      {
        label: "Job Done",
        data: labels.map(() => faker.number.int({ min: 1000, max: 3000 })),
        borderColor: "#00A15C",
        backgroundColor: "#00A15C",
      },
      {
        label: "Job Close",
        data: labels.map(() => faker.number.int({ min: 1000, max: 3000 })),
        borderColor: "#EA4300",
        backgroundColor: "#EA4300",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default ChartLine;
