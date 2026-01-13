import WindowWrapper from "#hoc/WindowWrapper"
import { WindowControls } from "#components"
import useWindowStore from "#store/window"

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile?.data

  return (
    <>
      <div id="window-header" className="flex items-center">
        <WindowControls target="txtfile" />
        <h2 className="flex-1 text-center font-semibold text-sm">
          {data ? data.name : "Text Viewer"}
        </h2>
        <div className="w-12" />
      </div>

      <div className="text-scroll p-5 space-y-6 bg-white">
        {data?.image && (
          <div className="flex justify-center">
            <img
              src={data.image}
              alt={data.name}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
        )}

        {data?.subtitle && (
          <h3 className="font-semibold text-lg text-center">
            {data.subtitle}
          </h3>
        )}

        {Array.isArray(data?.description) && data.description.length > 0 && (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {data.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, "txtfile")
export default TextWindow
