import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

type Song = {
  id: number;
  title: string;
  artist: string;
};

type RoomParams = {
  roomId: string;
};

const MusicRoom = () => {
  const { roomId } = useParams<RoomParams>();
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/rooms/${roomId}/queue`);
        const songsData = await response.json();
        setSongs(songsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSongs();
  }, [roomId]);

  const handleAddSong = async (title: string, artist: string) => {
    try {
      const response = await fetch(`/api/v1/rooms/${roomId}/queue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          artist,
        }),
      });
      const newSong = await response.json();
      setSongs([...songs, newSong]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Music Room {roomId}</h1>
      <MusicQueue songs={songs} />
      <AddSongForm onAddSong={handleAddSong} />
    </div>
  );
};

export default MusicRoom;
