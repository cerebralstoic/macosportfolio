import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';

const Vscode = () => {
  return (
    <div className="flex flex-col size-full">
      <div id="window-header" className=" shrink-0 backdrop-blur-xl bg-white/10 border-b border-white/15 shadow-sm">
        <WindowControls target="vscode" />
      </div>
      <div className='flex w-full h-full  min-w-180
        min-h-120'>

      <iframe
        title="Vscode"
        src="https://github1s.com/cerebralstoic/cerebralstoic/blob/main/README.md"
        className="flex-1 w-full bg-[#202020]"
        allow="clipboard-read; clipboard-write"
        />
        </div>
    </div>
  );
};

const VscodeWindow = WindowWrapper(Vscode, "vscode");

export default VscodeWindow;
