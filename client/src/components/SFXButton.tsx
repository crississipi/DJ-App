import { PiVinylRecordLight } from 'react-icons/pi'

interface SFXButtonProps {
    sfxName: string;
}

const SFXButton: React.FC<SFXButtonProps> = ({ sfxName }) => {
  return (
    <button className='sfx-button'>
        <PiVinylRecordLight />
        <span>{sfxName}</span>
    </button>
  )
}

export default SFXButton
