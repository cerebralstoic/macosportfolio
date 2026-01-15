import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import App from "./App"
import useWindowStore from "#store/window"
import { useEffect } from "react"

const NotFoundGate = () => {
  const location = useLocation()
  const { openWindow } = useWindowStore()

  useEffect(() => {
    if (location.pathname !== "/") {
      openWindow("notfound")
    }
  }, [location.pathname])

  return <App />
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFoundGate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
