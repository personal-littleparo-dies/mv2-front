import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface MusicRoomProps {
  roomId: string;
  roomPassword: string;
  onPasswordChange: (password: string) => void;
}

function MusicRoom(props: MusicRoomProps) {
  const { roomId } = useParams<{ roomId: string }>();
  const [newSong, setNewSong] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onPasswordChange(event.target.value);
  };

  const handleSongSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add newSong to the music queue
    setNewSong('');
  };

  return (
    <div>
      <h2>Room {roomId}</h2>
      <label htmlFor="room-password-input">Enter Room Password:</label>
      <input id="room-password-input" type="password" value={props.roomPassword} onChange={handlePasswordChange} />
      <h3>Current Music Queue:</h3>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
      </ul>
      <h3>Add a Song to the Queue:</h3>
      <form onSubmit={handleSongSubmit}>
        <input type="text" value={newSong} onChange={(event) => setNewSong(event.target.value)} />
        <button type="submit">Add Song</button>
      </form>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default MusicRoom;
