import { Dock, Home, Navbar, Welcome,Boot } from "#components";
import { Finder, Resume, Safari, Terminal, Text, ImageViewer, Contacts, Gallary, Vscode, AppleMusic } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Analytics } from "@vercel/analytics/react"
import { useEffect, useState } from "react";


gsap.registerPlugin(Draggable);
const App = () => {
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    const hasBooted = sessionStorage.getItem("booted");
    if(!hasBooted){
      setShowBoot(true);
    }
  },[]);

  const handleBootFinsih = () =>{
    sessionStorage.setItem("booted","true");
    setShowBoot(false);
  }

  if(showBoot){
    return <Boot onFinish={handleBootFinsih} />
  }
  return (
   <main>
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
      
      <Analytics/>
    </main>
  );
};

export default App