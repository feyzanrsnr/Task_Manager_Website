// import { Doughnut } from "react-chartjs-2";
// import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
// import { useSelector } from "react-redux";
// import { selectTaskStatsByRange } from "../redux/tasksSlice";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const bgColors = {
//        amethyst: "bg-purple-500/50 dark:bg-purple-500",
//        aqua: "bg-cyan-500/50 dark:bg-cyan-600",
//       "blue-500": "bg-blue-500/50 dark:bg-blue-600",
// }

// const ChartComponent = ({ title, dateRange, background}) => {

//   const { completed, total, percentage } = useSelector((state) =>
//     selectTaskStatsByRange(state, dateRange)
//   );

//   const options = {
//     responsive: true,
//     maintainAspectRatio:false,
//     plugins: {
//       legend: { display: false },
//       title: { display: false },
//     },
//   };

//   const data = {
//     labels: ["Completed", "Remaining"],
//     datasets: [
//       {
//         label: "Tasks",
//         data: [completed, total - completed],
//         backgroundColor: ["white", "rgba(255,255,255,0.13)"],
//         borderWidth: 0,
//         cutout: "80%",
//       },
//     ],
//   };

//   return (
//     <div
//       className={`${bgColors[background]} backdrop-blur-md gap-4 rounded-xl h-[300px] w-[300px] flex flex-col items-center justify-center`}
//     >
//       <span className="text-xl md:text-2xl text-white">{title}</span>

//       <div className="w-[230px] h-[230px]">
//         <Doughnut options={options} data={data} />
//       </div>

//       <div className="absolute inset-0 flex items-center justify-center text-xl font-bold left-3 top-10 text-white">
//         <div className="flex flex-col items-center">
//           <div className="flex items-baseline">
//             <span className="text-xl md:text-3xl">{percentage}</span>
//             <span className="text-xl ml-1 text-[#FFFFFF99]">%</span>
//           </div>
//           <span className="text-sm md:text-xl text-[#FFFFFF99] -ml-2 md:-ml-3">
//             {completed}/{total}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChartComponent;

import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { useSelector } from "react-redux";
import { selectTaskStatsByRange } from "../redux/tasksSlice";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = ({ title, dateRange,backgroundColor }) => {
  const { completed, total, percentage } = useSelector((state) =>
    selectTaskStatsByRange(state, dateRange)
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
        backgroundColor: ["#FFFFFF", "rgba(255, 255, 255, 0.2)"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-between 
      h-[280px] w-[250px] md:h-[320px] md:w-[280px] 
      rounded-2xl p-6 bg-${backgroundColor} shadow-xl`}>
      {/* Title */}
      <span className="text-lg md:text-xl font-semibold text-light-text tracking-wide">
        {title}
      </span>

      {/* Chart */}
      <div className="relative w-[200px] h-[200px]">
        <Doughnut options={options} data={data} />
        {/* Percentage overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-baseline">
            <span className="text-3xl md:text-4xl font-bold text-light-text">
              {percentage}
            </span>
            <span className="ml-1 text-light-text text-xl">%</span>
          </div>
          <span className="text-sm md:text-base text-light-text mt-1">
            {completed}/{total}
          </span>
        </div>
      </div>

    </div>
  );
};

export default ChartComponent;

