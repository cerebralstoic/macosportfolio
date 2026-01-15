import { Dock, Home, Navbar, Welcome,Boot } from "#components";
import { Finder, Resume, Safari, Terminal, Text, ImageViewer, Contacts, Gallary, Vscode, AppleMusic, NotFound } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react";


gsap.registerPlugin(Draggable);
const App = () => {
  const [showBoot, setShowBoot] = useState(true)

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("booted")
    if (hasBooted) {
      setShowBoot(false)
    }
  }, [])

  const handleBootFinish = () => {
    sessionStorage.setItem("booted", "true")
    setShowBoot(false)
  }

  return (
    <>
   <main  style={{
          visibility: showBoot ? "hidden" : "visible"
        }}
    >
      <Navbar />
      <Welcome />
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <ImageViewer/>
      <Contacts/>
      <Home/>
      <Gallary/>
      <Vscode/>
      <AppleMusic/>
      <NotFound/>
      
      <Analytics/>
    </main>
     {showBoot && <Boot onFinish={handleBootFinish} />}
    </>
  );
};

export default App