import { useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import { RotateCcw,Fullscreen} from 'lucide-react'
import { useSelector } from 'react-redux'

function PomodoroPage() {

  const theme = useSelector((state) => state.theme.theme)

  const WORK_TIME = 25 * 60;
  const SHORT_BREAK = 5 * 60;
  const LONG_BREAK = 15 * 60

  const [mode, setMode] = useState("pomodoro")
  const [timeLeft, setTimeLeft ] = useState(WORK_TIME)
  const [isRunning, setIsRunning] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const timerRef = useRef(null)
  
  //fullscreen
  const containerRef = useRef(null)

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
        .then(() => setIsFullScreen(true))
        .catch(err => console.error(`Tam ekran açılmadı: ${err.message}`))
    } else {
      document.exitFullscreen().then(() => setIsFullScreen(false))
    }
  }

  // Fullscreen değişimini dinle
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, [])

  //Mode değiştiğinde süreyi güncelle
  useEffect(() => {
    if(mode === "pomodoro") setTimeLeft(WORK_TIME)
    if(mode === "short") setTimeLeft(SHORT_BREAK)
    if(mode === "long") setTimeLeft(LONG_BREAK)
  }, [mode])

 // Timer çalışırken her saniye azalt
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return prev;
          }
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  //Başlat / Durur

  const toggleTimer = () => {
    setIsRunning((prev) => !prev)
  }

  //Sıfırla
  const resetTimer = () => {
    if (mode === "pomodoro") setTimeLeft(WORK_TIME);
    if (mode === "short") setTimeLeft(SHORT_BREAK);
    if (mode === "long") setTimeLeft(LONG_BREAK);
    setIsRunning(false);
    clearInterval(timerRef.current);
  }

  //dakika : saniye formatı
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  return (

    <div className='min-h-screen flex items-center justify-center'>
    
      <div ref={containerRef} className='flex flex-col items-center justify-center gap-20'>
      <div className='flex gap-1 md:gap-10'>

        <Button variant='ghost' size='lg'
         mode={isFullScreen ? "fullscreen" : theme === "dark" ? "dark" : "light"} 
        onClick={() => setMode("pomodoro")}>pomodoro</Button>

        <Button variant='ghost' size='lg'  mode={isFullScreen ? "fullscreen" : theme === "dark" ? "dark" : "light"} onClick={() => setMode("short")}>short break</Button>

        <Button variant='ghost' size='lg'  mode={isFullScreen ? "fullscreen" : theme === "dark" ? "dark" : "light"} onClick={() => setMode("long")}>long break</Button>
       
      </div>

      <p className='font-bold text-7xl md:text-9xl'>{formatTime(timeLeft)}</p>

      <div className='flex items-center gap-3'>

        <Button variant='ghost' size='lg' mode={isFullScreen ? "fullscreen" : theme === "dark" ? "dark" : "light"} onClick={toggleTimer}>
          {isRunning ? "PAUSE" : "START"}
        </Button>

        <RotateCcw size={30} className='cursor-pointer hover:scale-[1.3]' onClick={resetTimer}
        />
        <Fullscreen size={30} className='cursor-pointer hover:scale-[1.3]' onClick={toggleFullScreen} />
      </div>
    </div>
    </div>

  )
}

export default PomodoroPage