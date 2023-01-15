import React from "react";

type SpotifyTrackProps = {
  src: string;
  compact: boolean;
}

export function SpotifyTrack({ src, compact = false }: SpotifyTrackProps): JSX.Element {
  return (
    <iframe
      style={{ borderRadius: "12px", border: "none", gridColumn: "1 / 6"  }}
      src={src}
      width="100%"
      height={compact ? 152 : 352}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
