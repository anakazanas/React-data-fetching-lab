// src/components/GifInfo.tsx
import type { Gif } from "../shared.types";

type GifInfoProps = {
  gif: Gif;
};

function GifInfo({ gif }: GifInfoProps) {
  return (
    <div>
      <h2>{gif.title}</h2>
      <img src={gif.url} alt={gif.title} />
    </div>
  );
}

export default GifInfo;