import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Track {
  id: number;
  title: string;
  uri: string;
}

interface MusicAdderProps {
  onMusicAdded: () => void;
}

type FormValues = {
  title: string;
  uri: string;
};

const MusicQueue: React.FC<MusicAdderProps> = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    uri: "",
  });
  const { roomId } = useParams<{ roomId: string }>();
  const [trackList, setTrackList] = useState<Track[]>([]);

  async function fetchMusicList() {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/${roomId}/queue`);
      if (!response.ok) {
        throw new Error('Failed to fetch music list');
      }
      const data = await response.json();
      setTrackList(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody = {
      ...formValues,
      room_id: roomId,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log("Request body:", JSON.stringify(requestBody));
    await axios
      .post(
        `http://localhost:8000/api/v1/${roomId}/queue`,
        JSON.stringify(requestBody),
        config
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    
    fetchMusicList();
    setFormValues({
      title: "",
      uri: "",
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchMusicList();
  }, []);

  return (
    <div>
      <h2>Music Queue</h2>
      {trackList.length === 0 ? (
        <p>No songs queued up</p>
      ) : (
        <ul>
          {trackList.map((music) => (
            <li key={music.id}> {/* Warning: Each child in a list should have a unique "key" prop. */}
              {music.title} <a href="{music.uri}">{music.uri}</a>           
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleFormSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        URL:
        <input
          type="url"
          name="uri"
          value={formValues.uri}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add Song</button>
    </form>
    </div>
  );
}

export default MusicQueue;
