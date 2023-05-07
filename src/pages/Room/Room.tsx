// import { useState, useEffect } from 'react';
import MusicRoom from "../../components/MusicRoom/MusicRoom";

const Room: React.FC = () => {
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
      <MusicRoom />
    </div>
  );
}

// async function authenticateRoom(roomId: string) {
//   const response = await fetch(`/api/rooms/${roomId}/auth`);
//   const data = await response.json();
//   return data;
// }

export default Room;
