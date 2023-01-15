import React from "react";

type SpotifyAlbumProps = {
  src: string;
  compact: boolean;
};


export function SpotifyAlbum({
  src,
  compact = false,
}: SpotifyAlbumProps): JSX.Element {
  return (
    <iframe
      style={{ borderRadius: "12px", border: "none", gridColumn: "1 / 6" }}
      src={src}
      width="100%"
      height={compact ? 80 : 380}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
