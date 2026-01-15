import { useEffect } from "react"
import useWindowStore from "#store/window"

const useMobileGuard = () => {
  const { openWindow, closeWindow } = useWindowStore()

  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 640) {
        openWindow("notfound")
      } else {
        closeWindow("notfound")
      }
    }

    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
}

export default useMobileGuard
