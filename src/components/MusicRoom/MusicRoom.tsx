import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

interface Track {
  id: number;
  title: string;
  uri: string;
}

type FormValues = {
  title: string;
  uri: string;
};

function Room() {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    uri: "",
  });
  const { roomId } = useParams<{ roomId: string }>();
  const [trackList, setTrackList] = useState<Track[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api.get<Track[]>(`${roomId}/queue`).then((response) => {
      setTrackList(response.data);
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsError(true);
    });
    
    return () => {
      setIsLoading(true);
    }
  }, [roomId]);

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
  
    setIsLoading(true);
  
    try {
      await api.post(`${roomId}/queue`, requestBody, config);
      setFormValues({
        title: "",
        uri: "",
      });
      const response = await api.get<Track[]>(`${roomId}/queue`);
      setTrackList(response.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Music Room {roomId}</h1>
      {isError ? (
        <p>Something went wrong...</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : !isLoading && (
        <>
          <h2>Music Queue</h2>
          {trackList.length === 0 ? (
            <p>No songs queued up</p>
          ) : (
            <ul>
              {trackList.map((music) => (
                <li key={music.id}>
                  {" "}
                  {/* Warning: Each child in a list should have a unique "key" prop. */}
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
        </>
      )}
    </div>
  );
}

export default Room;
