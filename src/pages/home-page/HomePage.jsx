import Chart from "../../components/Chart";
import { sentences } from "../../constants/sentences";


function DashboardPage() {

  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)]

  return (
    <div className='flex flex-col h-full w-full gap-5 md:gap-10 px-5 pt-3'>
      <p className='text-2xl md:text-3xl text-center md:text-start'>Welcome again, feyzanur</p>
      <div className='flex flex-col md:flex-row items-center justify-around bg-white dark:bg-slate-100 gap-y-5 py-8 rounded-md shadow-md dark:shadow-white dark:shadow-sm'>
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
      <div className="h-full flex items-center justify-center text-2xl md:text-4xl py-5 font-serif italic">
       {randomSentence}
      </div>
    </div>
  )
}

export default DashboardPage