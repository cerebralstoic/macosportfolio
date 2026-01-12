import WindowWrapper from "#hoc/WindowWrapper"
import { WindowControls } from "#components"
import useWindowStore from "#store/window"

const ImageViewer = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile?.data

  if (!data) return null

  const { name, imageUrl } = data

  return (
    <>
      <div id="window-header" className="flex items-center">
        <WindowControls target="imgfile" />
        <h2 className="flex-1 text-center font-semibold text-sm">
          {name}
        </h2>
        <div className="w-12" />
      </div>

      <div className="flex items-center justify-center bg-black p-4 w-full h-full">
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-full object-contain rounded"
          draggable={false}
        />
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(ImageViewer, "imgfile")
export default ImageWindow
