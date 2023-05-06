import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MusicRoom from '../../components/MusicRoom/MusicRoom';

interface RoomParams {
  roomId: string;
}

function Room() {
  const { roomId } = useParams<RoomParams>();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // useEffect(() => {
  //   // Make API call to authenticate room
  //   authenticateRoom(roomId).then((response) => {
  //     setIsAuthenticated(response.isAuthenticated);
  //   });
  // }, [roomId]);
  
  // if (!isAuthenticated) {
  //   // Render loading spinner or authentication error message
  //   return <div>Loading...</div>;
  // }
  
  return (
    <div>
      // Render MusicRoom component with roomId as prop
      <MusicRoom roomId={roomId} />
    </div>
  );
}

// async function authenticateRoom(roomId: string) {
//   const response = await fetch(`/api/rooms/${roomId}/auth`);
//   const data = await response.json();
//   return data;
// }

export default Room;
