import { useParams } from 'react-router-dom';
import MusicQueue from './MusicQueue';

type RoomParams = {
  roomId: string;
};

const MusicRoom = () => {
  const { roomId } = useParams<RoomParams>();

  return (
    <div>
      <h1>Music Room {roomId}</h1>
      <MusicQueue roomId={roomId}/>
    </div>
  );
};

export default MusicRoom;
