import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../utils/api";

interface Room {
  id: number;
  name: string;
}

function MusicLobby() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    api.get<Room[]>("rooms").then((response) => {
      setRooms(response.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>Available Rooms</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                <Link to={`/room/${room.id}`}>{room.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MusicLobby;
