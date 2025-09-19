import { User2Icon } from "lucide-react";
import Chart from "../../components/Chart";
import { sentences } from "../../constants/sentences";


function DashboardPage() {

  const randomSentence = sentences[Math.floor(Math.random() * sentences.length)]

  return (
    <div className='flex flex-col h-full w-full gap-5 md:gap-10 px-5 pt-3'>
       <div className='flex items-center justify-between'>
        <p>Good Morning, James!</p>
        <User2Icon/>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-around gap-y-5 py-3 md:py-5'>
      <Chart
        title="Today"
        dateRange="day"
        background="amethyst"
      />
      <Chart
        title="This Week"
        dateRange="week"
        background="aqua"  
      />
      <Chart
        title="This Month"
        dateRange="month"
        background="blue-500"
      />
      </div>
      <div className="h-full flex items-center justify-center text-2xl md:text-4xl py-5 font-serif italic text-center">
       {randomSentence}
      </div>
    </div>
  )
}

export default DashboardPage


