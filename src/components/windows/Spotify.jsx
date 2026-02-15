import React from 'react'
import MacWindow from "./MacWindow";
import './spotify.scss'


const Spotify = ({windowName,setWindowsState}) => {
  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState} width='30vw' height='80vh'>
        <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/2gU9qQ1lKtB2F0sUbf7Pra?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify