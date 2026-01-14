import { useEffect, useState } from "react"
import dayjs from "dayjs"

const Boot = ({ onFinish }) => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

   useEffect(() => {
    const img = new Image()
    img.src = "/images/me.png"
  }, [])

  return (
    <div className="boot-root" onClick={onFinish}>
      <video
        poster="/images/boot-poster.jpg"
        className="boot-video"
        src="/video/boot.mp4"
        preload="metadata"
        autoPlay
        muted
        playsInline
        onEnded={onFinish}
      />

      <div className="boot-time">
        <div className="boot-date">{time.format("ddd MMM D")}</div>
        <div className="boot-clock">{time.format("HH:mm")}</div>
      </div>

      <div className="boot-user">
        <img src="/images/me.webp" alt="Vineet" />
        <div className="boot-name">Vineet Rawat</div>
        <div className="boot-hint">Click to Login</div>
      </div>
    </div>
  )
}

export default Boot
