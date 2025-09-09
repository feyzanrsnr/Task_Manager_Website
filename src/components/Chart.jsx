import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useSelector } from "react-redux";
import { selectTaskStatsByRange } from "../redux/tasksSlice"; // doğru path'e göre düzenle

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ title, dateRange, gradientFrom, gradientTo }) => {
  const { completed, total, percentage } = useSelector((state) =>
    selectTaskStatsByRange(state, dateRange)
  );

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
  };

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        label: "Tasks",
        data: [completed, total - completed],
        backgroundColor: ["white", "rgba(255,255,255,0.13)"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  return (
    <div
      className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-md dark:bg-gradient-to-br dark:from-midnight/50 dark:to-deepsea/50 rounded-xl p-2 px-4 md:px-6 h-[380px] relative`}
    >
      <span className="text-xl md:text-2xl text-white">{title}</span>

      <div className="p-2 md:p-4">
        <Doughnut options={options} data={data} />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold top-0 md:top-10 left-4 text-white">
        <div className="flex flex-col items-center">
          <div className="flex items-baseline">
            <span className="text-lg md:text-3xl">{percentage}</span>
            <span className="text-xs md:text-xl text-[#FFFFFF99]">%</span>
          </div>
          <span className="text-xs md:text-xl text-[#FFFFFF99] -ml-4">
            {completed}/{total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
