import useWindowStore from "#store/window"


const WindowControls = ({target}) => {
    const disableMaximize = target === "applemusic" || "notfound";
    const {closeWindow, minimizeWindow, toggleMaximizeWindow} = useWindowStore();

      return (<div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)}></div>
        <div className="minimize" onClick={() => minimizeWindow(target)}></div>
        <div
        className={`maximize ${disableMaximize ? "disabled" : ""}`}
        onClick={() => {
          if (!disableMaximize) {
            toggleMaximizeWindow(target);
          }
        }}
      />
        </div>
      );
}

export default WindowControls