import { Dock, Home, Navbar, Welcome } from "#components";
import { Finder, Resume, Safari, Terminal, Text, ImageViewer, Contacts, Gallary, Vscode, AppleMusic } from "#windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Analytics } from "@vercel/analytics/react"

gsap.registerPlugin(Draggable);
const App = () => {
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