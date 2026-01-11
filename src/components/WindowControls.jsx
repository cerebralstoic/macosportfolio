import useWindowStore from "#store/window"


const WindowControls = ({target}) => {
    const {closeWindow, minimizeWindow, toggleMaximizeWindow} = useWindowStore();

      return (<div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}></div>
        <div className="minimize" onClick={() => minimizeWindow(target)}></div>
        <div className="maximize" onClick={() => toggleMaximizeWindow(target)}></div>
        </div>
      );
}

export default WindowControls