import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MusicRoom from '../../components/MusicRoom/MusicRoom';

interface RoomParams {
  roomId: string;
}

function Room() {
  const { roomId } = useParams<RoomParams>();
  const [roomPassword, setRoomPassword] = useState('');

  // TODO: handle room password validation and joining the room

  return (
    <div>
      <h1>Room {roomId}</h1>
      <p>Enter room password:</p>
      <input type="password" value={roomPassword} onChange={(e) => setRoomPassword(e.target.value)} />
      <MusicRoom roomId={roomId} />
    </div>
  );
}

export default Room;
