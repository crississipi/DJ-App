import { PiVinylRecordBold } from 'react-icons/pi'
import '../App.css'
import { HiMusicalNote } from 'react-icons/hi2';

interface MusicProps {
    musicName: string;
    timeSpan: string;
    isHidden: boolean;
}
const Music: React.FC<MusicProps> = ({ musicName, timeSpan, isHidden }) => {
  return (
    <button className='music'>
        { isHidden ? (
          <>
            <span id='nameID' className='music-title'>{ musicName }</span>
            <span className='time-span'>{ timeSpan }</span>
            <PiVinylRecordBold className='playing'/>
          </>
        ) : ( <HiMusicalNote style={{ height: '16px', width: '16px' }} /> )}
    </button>
  )
}

export default Music