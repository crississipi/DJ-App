import { TbPlayerPauseFilled, TbPlayerPlayFilled, TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled, TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled, TbVinyl } from "react-icons/tb"
import Thumbnail from "./Thumbnail"
import { useState } from "react"


const MusicInfo = () => {
  const [play, setPlay] = useState('flex');
  const togglePlayMusic = () => {
    setPlay(prev => prev === 'flex' ? 'none' : 'flex');
  }
  return (
    <div className="music-info">
      <div className="play-audio">
        <audio>
        <source src="" type="audio/mpeg" />
        </audio>
        <span><TbVinyl className="icon"/>Music Name</span>
        <div className="music-duration">
            <input type="range" className="music-range"/>
            <span>00:00</span>
            <span>04:20</span>
        </div>
        <div className="music-btn-holder">
            <button className="music-btn"><TbPlayerTrackPrevFilled /></button>
            <button className="music-btn"><TbPlayerSkipBackFilled /></button>
            <button className="music-btn" onClick={togglePlayMusic}>
                <TbPlayerPlayFilled style={{ display: play === "flex" ? 'none' : 'flex' }}/>
                <TbPlayerPauseFilled style={{ display: play === "flex" ? 'flex' : 'none' }}/>
            </button>
            <button className="music-btn"><TbPlayerSkipForwardFilled /></button>
            <button className="music-btn"><TbPlayerTrackNextFilled /></button>
        </div>
      </div>
      <div className="thumbnail-holder">
        <span>Saved Music Clips</span>
        { Array.from({ length: 15 }).map((_,i) => (
            <Thumbnail key={i} name={`Thumbnail ${i + 1}`} from={"01:22"} to={"02:43"} />
        ))}
      </div>
    </div>
  )
}

export default MusicInfo
