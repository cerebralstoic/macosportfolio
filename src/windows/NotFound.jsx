import WindowWrapper from "#hoc/WindowWrapper"
import { WindowControls } from "#components"
import { AlertCircle } from "lucide-react"
import useWindowStore from "#store/window"

const NotFound = () => {
  const isMobile = window.innerWidth < 640;

  const { closeWindow } = useWindowStore()

  return (
    <>
      <div id="window-header" className="flex items-center">
        <WindowControls target="notfound" />
        <h2 className="flex-1 text-center font-semibold text-sm">
          {isMobile ? "Ohh Noooo" : "Not Found"}
        </h2>
        <div className="w-12" />
      </div>

      <div className="p-8 flex flex-col items-center text-center gap-6 bg-white">
        <AlertCircle className="w-12 h-12 text-red-400" strokeWidth={1.5} />

        <h1 className="text-5xl font-semibold">
          {isMobile ? "Oops! You need a Desktop": "Oops! You’ve reached" }
        </h1>
        {isMobile ? "" 
        : <h2 className="text-6xl bold  font-light">
          404 page
        </h2>
        }
        

        <p className="text-gray-500 max-w-md">
          {isMobile 
          ? "This macOS-style portfolio is designed for laptops and tablets. Please visit on a larger screen."
          : "The page you're looking for seems to have wandered off into the digital void."}
        </p>

        <button
          onClick={() => {closeWindow("notfound")
            window.history.replaceState(null, "", "/")
          }}
          className="px-8 py-3 bg-red-400 hover:bg-red-500 rounded-lg text-white transition-all active:scale-95"
        >
          Close Window
        </button>
      </div>
    </>
  )
}

const NotFoundWindow = WindowWrapper(NotFound, "notfound")
export default NotFoundWindow
