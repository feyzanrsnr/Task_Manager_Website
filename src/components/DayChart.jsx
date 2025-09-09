// import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false, // Legend gizli
//       position: "top",
//     },
//     title: {
//       display: false,
//     },
//   },
// };

// const data = {
//   labels: ["Completed", "Remaining"],
//   datasets: [
//     {
//       label: "Tasks",
//       data: [75, 25],
//       backgroundColor: ["white", "rgba(255,255,255,0.13)"],
//       borderWidth: 0,
//       cutout: "80%", // Doughnut iç boşluğu
//     },
//   ],
// };

// const DayChart = () => {
//   return (
//     <div className="flex gap-4 flex-wrap">

//         <div className="bg-gradient-to-br from-amethyst/50 to-amethyst/50 backdrop-blur-md dark:bg-gradient-to-br dark:from-midnight/50 dark:to-deepsea/50 dark:backdrop-blur-md rounded-xl p-2 px-4 md:px-6 h-[380px] relative">
//       <span className="text-xl md:text-2xl text-white">Today</span>
//       {/* Chart container */}
//       <div className="p-2 md:p-4">
//         <Doughnut options={options} data={data} />
//       </div>

//       {/* Ortadaki metin */}
//       <div className="absolute inset-0 flex items-center justify-center text-xl font-bold top-0 md:top-10 left-4 text-white">
//         <div className="flex flex-col items-center">
//           <div className="flex items-baseline">
//             <span className="text-lg md:text-3xl">75</span>
//             <span className="text-xs md:text-xl text-[#FFFFFF99]">%</span>
//           </div>
//           <span className="text-xs md:text-xl text-[#FFFFFF99] -ml-4">24/35</span>
//         </div>
//       </div>
//     </div>

//     <div className="bg-gradient-to-br from-aqua/50 to-aqua/50 backdrop-blur-md dark:bg-gradient-to-br dark:from-midnight/50 dark:to-deepsea/50 dark:backdrop-blur-md rounded-xl p-2 px-4 md:px-6 h-[380px] relative">
//       <span className="text-xl md:text-2xl text-white">This Week</span>
//       {/* Chart container */}
//       <div className="p-2 md:p-4">
//         <Doughnut options={options} data={data} />
//       </div>

//       {/* Ortadaki metin */}
//       <div className="absolute inset-0 flex items-center justify-center text-xl font-bold top-0 md:top-10 left-4 text-white">
//         <div className="flex flex-col items-center">
//           <div className="flex items-baseline">
//             <span className="text-lg md:text-3xl">75</span>
//             <span className="text-xs md:text-xl text-[#FFFFFF99]">%</span>
//           </div>
//           <span className="text-xs md:text-xl text-[#FFFFFF99] -ml-4">24/35</span>
//         </div>
//       </div>
//     </div>

//     <div className="bg-gradient-to-br from-blue-500/50 to-blue-400/50 backdrop-blur-md dark:bg-gradient-to-br dark:from-midnight/50 dark:to-deepsea/50 dark:backdrop-blur-md rounded-xl p-2 px-4 md:px-6 h-[380px] relative">
//       <span className="text-xl md:text-2xl text-white">This Month</span>
//       {/* Chart container */}
//       <div className="p-2 md:p-4">
//         <Doughnut options={options} data={data} />
//       </div>

//       {/* Ortadaki metin */}
//       <div className="absolute inset-0 flex items-center justify-center text-xl font-bold top-0 md:top-10 left-4 text-white">
//         <div className="flex flex-col items-center">
//           <div className="flex items-baseline">
//             <span className="text-lg md:text-3xl">75</span>
//             <span className="text-xs md:text-xl text-[#FFFFFF99]">%</span>
//           </div>
//           <span className="text-xs md:text-xl text-[#FFFFFF99] -ml-4">24/35</span>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default DayChart;


import Chart from "./Chart";

const DayChart = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Chart
        title="Today"
        dateRange="day"
        gradientFrom="from-amethyst/50"
        gradientTo="to-amethyst/50"
      />
      <Chart
        title="This Week"
        dateRange="week"
        gradientFrom="from-aqua/50"
        gradientTo="to-aqua/50"
      />
      <Chart
        title="This Month"
        dateRange="month"
        gradientFrom="from-blue-500/50"
        gradientTo="to-blue-400/50"
      />
    </div>
  );
};

export default DayChart;
