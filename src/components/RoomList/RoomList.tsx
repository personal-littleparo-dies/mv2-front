import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Room {
  id: number;
  name: string;
}

function RoomList() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    axios.get<Room[]>('http://localhost:8000/api/v1/rooms').then((response) => {
      setRooms(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/room/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
