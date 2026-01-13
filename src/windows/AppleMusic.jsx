import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const AppleMusic = () => {
  return (
    <>
    <div className="flex flex-col size-full">
      <div id="window-header" className=" shrink-0 backdrop-blur-xl bg-white/10 border-b border-white/15 shadow-sm">
        <WindowControls target="applemusic" />
      </div>
      <div className='flex w-full h-full  min-w-180
        min-h-120 rounded-none'>
      <iframe
        title="Spotify"
        src="https://embed.music.apple.com/in/playlist/retro-vibe/pl.u-JPAZblVsL0qKDDr?theme=light"
        className="flex-1 w-full rounded-none"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
      
    </div>
    </div>
    </>
  )
}
const AppleMusicWindow  = WindowWrapper(AppleMusic, "applemusic");

export default AppleMusicWindow;