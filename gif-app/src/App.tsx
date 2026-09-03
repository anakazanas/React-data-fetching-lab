import { useState, useEffect } from "react";
import axios from "axios";
import type { ApiResponse, Gif } from "./shared.types";
import Form from "./components/Form";
import GifInfo from "./components/GifInfo";

function App() {
  const [gif, setGif] = useState<Gif | null>(null);
  const [error, setError] = useState<string | null>(null);
  const apiKey = "nMuZoJZwqyf6LdvchofTU3g5cIAg1HmT";

  const searchGif = (searchTerm: string) => {
    axios
      .get<ApiResponse>(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`)
      .then((response) => {
        const { data } = response.data;
        if (data.id && data.images) {
          setGif({ id: data.id, title: data.title ?? "", url: data.images.original.url });
          setError(null);
        } else {
          setError("No GIF found for that search.");
          setGif(null);
        }
      });
  };

    useEffect(() => { searchGif("hello"); }, []);

  return (
    <>
      <h1>GIF Search</h1>
      <Form handleSubmit={searchGif} />
      {error && <p>{error}</p>}
      {gif && <GifInfo gif={gif} />}
    </>
  );
}

export default App;