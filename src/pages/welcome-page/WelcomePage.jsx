import { LinkedinIcon } from 'lucide-react'

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
         <button onClick={() => navigate("home")} className="h-12 px-4 rounded-xl font-semibold transition-all duration-300 ease-in-out bg-gradient-to-br from-cosmos to-amethyst text-light-background shadow-[0_4px_15px_rgba(82,70,224,0.3)] hover:shadow-[0_8px_25px_rgba(82,70,224,0.5)] focus:outline-none hover:scale-[1.05] active:scale-[0.98] ">Proje Sayfasına Devam et</button>

        <p className='text-sm md:text-lg mt-10 text-gray-600'>
            Proje hakkında fikir veya yorumlarınızı benimle paylaşmak isterseniz LinkedIn üzerinden bana ulaşabilirsiniz.
        </p>

        <a 
        href='https://www.linkedin.com/in/feyzanursener' 
        target='_blank' 
        rel='noopener noreferrer'
        className='flex items-center border-2 border-black gap-2 text-black px-6 py-2 rounded-md hover:scale-[1.05] active:scale-[0.98]'
        >
        <LinkedinIcon color='black'/>
        LinkedIn ile iletişime geç
        </a>
    </div>
  )
}

export default WelcomePage