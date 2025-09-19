import { User2Icon } from "lucide-react";
import Chart from "../../components/Chart";
import { sentences } from "../../constants/sentences";


function DashboardPage() {

  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)]

  return (
    <div className='min-h-screen flex flex-col'>
       <div className='bg-white shadow-sm rounded-b-xl flex items-center justify-between h-16 text-xl md:text-3xl font-bold px-4 md:px-5'>
        <p>Good Morning, James!</p>
        <User2Icon className="border-2 border-black rounded-full w-7 h-7 md:w-9 md:h-9"/>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-20 gap-y-5 py-10'>
      <Chart
        title="Today"
        dateRange="day"
        backgroundColor="amethyst"
      />
      <Chart
        title="This Week"
        dateRange="week"
        backgroundColor="aqua"  
      />
      <Chart
        title="This Month"
        dateRange="month"
        backgroundColor="sunrise"
      />
      </div>
      
      <div className="flex items-center justify-center text-2xl md:text-4xl pb-5 md:pt-16 font-serif italic text-center">
       {randomSentence}
      </div>
    </div>
  )
}

export default DashboardPage


