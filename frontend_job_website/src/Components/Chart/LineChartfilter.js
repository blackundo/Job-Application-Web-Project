// LineChart.js
import { useState, useEffect, useCallback } from "react";
import { Line } from "react-chartjs-2";
import { subMonths, subYears, startOfDay, eachDayOfInterval } from "date-fns";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
const LineChart = () => {
  Chart.register(CategoryScale);
  const [chartData, setChartData] = useState({});
  const [filter, setFilter] = useState("all"); // 'all', 'month', 'year'

  // Function to generate fake data
  const generateFakeData = (startDate, endDate) => {
    const days = eachDayOfInterval({ start: startDate, end: endDate });
    const labels = days.map((date) => date.toISOString().split("T")[0]);
    const data = labels.map(() => Math.floor(Math.random() * 100));

    return {
      labels,
      datasets: [
        {
          label: "Data Series",
          data,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
        },
      ],
    };
  };
  const filterData = useCallback(
    (filterType) => {
      const currentDate = new Date();
      let startDate;
      switch (filterType) {
        case "month":
          startDate = subMonths(currentDate, 1);
          break;
        case "year":
          startDate = subYears(currentDate, 1);
          break;
        default:
          startDate = startOfDay(subYears(currentDate, 10));
          break;
      }

      const endDate = currentDate;
      const fakeData = generateFakeData(startDate, endDate);

      setChartData(fakeData);
    },
    [setChartData]
  );

  useEffect(() => {
    filterData(filter);
  }, [filter, filterData]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  if (!chartData || !chartData.labels || !chartData.datasets) {
    return <div>Loading...</div>; // or handle the case appropriately
  }
  return (
    <div>
      <div>
        <label>Filter by:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      </div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
