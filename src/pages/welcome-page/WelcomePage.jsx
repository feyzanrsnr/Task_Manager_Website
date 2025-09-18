import { LinkedinIcon } from 'lucide-react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router'


const WelcomePage = () => {
    
    const navigate = useNavigate()

  return (
    <div className='min-h-screen flex flex-col gap-4 items-center justify-center text-center px-5'>
        <h1 className='text-3xl md:text-5xl font-bold font-serif'>Taskly.</h1>
        <p className='text-md md:text-xl italic font-serif text-gray-700 max-w-xl'>
          Taskly, kısa veya uzun süreli görevleri yönetmek için geliştirilen bir Task Manager uygulamasıdır. Henüz kullanıcıların aktif olarak görev ekleyip yönetebileceği bir aşamada değildir, 
          ancak projeye göz atabilir ve yaptığım çalışmaları inceleyebilirsiniz.
        </p>
         <Button onClick={() => navigate("home")} variant='primary' mode="light">Proje Sayfasına Devam et</Button>

        <p className='text-sm md:text-lg mt-10 text-gray-600'>
            Proje hakkında fikir veya yorumlarınızı benimle paylaşmak isterseniz LinkedIn üzerinden bana ulaşabilirsiniz.
        </p>

        <a 
        href='https://www.linkedin.com/in/feyzanursener' 
        target='_blank' 
        rel='noopener noreferrer'
        className='flex items-center border-2 border-black gap-2 text-black px-6 py-2 rounded-md hover:bg-white'
        >
        <LinkedinIcon color='black'/>
        LinkedIn ile iletişime geç
        </a>
    </div>
  )
}

export default WelcomePage