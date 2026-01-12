import { WindowControls } from "#components"
import { socials } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"

const Contacts = () => {
  return (
    <>
      <div id="window-header" className="flex items-center">
        <WindowControls target="contact" />
        <h2 className="flex-1 text-center font-semibold text-sm">
          Contact Me
        </h2>
        <div className="w-12" />
      </div>

      {/* ✅ CONTENT WRAPPER */}
      <div className="h-[calc(100%-56px)] p-6 space-y-6 bg-white overflow-auto">
        <div className="flex flex-col items-center text-center space-y-3">
          <img
            src="/images/adrian.jpg"
            alt="Vineet"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <h3 className="text-lg font-semibold">Let’s Connect</h3>
          <p className="text-sm text-gray-600">
            Wanna meet? I’m always open to conversations.
          </p>
        </div>
        <div className="flex justify-center">
        <ul className="grid grid-cols-2 gap-4">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="rounded-xl transition-transform hover:scale-105"
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 text-white font-medium"
              >
                <img src={icon} alt={text} className="w-5 h-5" />
                <span>{text}</span>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </>
  )
}

const ContactsWindow = WindowWrapper(Contacts, "contact")
export default ContactsWindow
