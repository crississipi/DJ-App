import { AiFillDelete, AiFillEdit } from "react-icons/ai";

interface ThumbnailProps {
    name: string;
    from: string;
    to: string;
}
const Thumbnail:React.FC<ThumbnailProps> = ({ name, from, to }) => {
  return (
    <div className="thumbnail-btn">
      <div className="thumbnail-info">
        <span className="thumbnail-name">{name}</span>
        <span>{from}</span>
        <span>{to}</span>
      </div>
      <button><AiFillEdit /></button>
      <button><AiFillDelete /></button>
    </div>
  )
}

export default Thumbnail
