import React from 'react';
import { Link } from 'react-router-dom';

interface Room {
  id: string;
  name: string;
}

interface Props {
  rooms: Room[];
}

function RoomList({ rooms }: Props) {
  return (
    <div>
      <h2>Room List</h2>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
