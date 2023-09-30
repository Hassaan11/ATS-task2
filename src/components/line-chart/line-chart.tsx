import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { GraphData } from "../../types/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

type lineChartProps = {
  data: GraphData;
};

const LineChart = ({ data }: lineChartProps) => {
  return (
    <Line
      options={{
        scales: {
          y: {
            max: Math.max(750),
            min: Math.max(250),
            ticks: { stepSize: 250 },
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
        },
      }}
      style={{ width: "100%", height: "100%" }}
      data={data}
      updateMode="active"
    />
  );
};

export default LineChart;
