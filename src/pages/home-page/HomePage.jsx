import DayChart from '../../components/DayChart'


function DashboardPage() {
  return (
    <div className='flex flex-col h-full w-full gap-10 px-5 pt-3'>
      <p className='text-2xl md:text-3xl'>Welcome again, username</p>
      <DayChart/>
    </div>
  )
}

export default DashboardPage