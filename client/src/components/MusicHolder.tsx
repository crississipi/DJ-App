import { HiMiniMusicalNote } from "react-icons/hi2";
import Music from "./Music";
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineSearch } from "react-icons/hi";
import { useState } from "react";

const MusicHolder = () => {
  const [width, setWidth] = useState('30%');
  const [display, setDisplay] = useState('flex');

  const toggleHolder = () => {
    setWidth(prev => prev === '30%' ? '5%' : '30%');
    setDisplay(prev => prev === 'flex' ? 'none' : 'flex')
  };

  return (
    <div className='music-holder' style={{ width: width }}>
      <div className="title-display">
        <h1 style={{ display: display }}><HiMiniMusicalNote />Track</h1>
        <div style={{ display: display }} className="search-music">
          <input className="search-input" type="text" placeholder="Search for music..." />
          <button>
            <HiOutlineSearch />
          </button>
        </div>
        <button className="expand-btn" onClick={toggleHolder}>
          <HiOutlineChevronRight className="side-icon" style={{ display: width === '30%' ? 'none' : 'flex' }} />
          <HiOutlineChevronLeft className="side-icon" style={{ display: width === '30%' ? 'flex' : 'none' }}/>
        </button>
      </div>
        <div className="music-holder holder" >
          { Array.from({ length: 20 }).map((_, i) => (
            <Music key={i} musicName={`Music Name ${i}`} timeSpan={'01:00'} isHidden={width === '30%'}/>
          ))}
        </div>
        
    </div>
  )
}

export default MusicHolder
