import React, { useEffect, useState } from "react";

export default function Spotify() {
  const [track, setTrack] = useState();

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers: {
        Authorization:
          "Bearer BQBoo-J9sF42bRaUaIlFk0cMcgOZ5qxugcoy10iW9syIGjD62cdciDkus2JpSxsbXzBADiVJhGROGCghry58Z6z_EKS2Axrh1lQbpbMVBEtDRSjTpbgsnFvrjPMPw7xqVNgcL7m89mIO4x3zVbuA0OeidQMd1VCzCX1VA3IRpJtvd9lpstA7dpiB76tks8DZudwjgbQ7jQ",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setTrack({
          name: data.items[0].track.name,
          artists: data.items[0].track.artists,
          src: data.items[0].track.album.images[2].url,
        });
      });
  }, []);

  return (
    <section className="w-11/12  md:w-8/12 lg:w-1/3 flex mx-auto items-center justify-between bg-gray-500/30 p-6 py-4 rounded-xl backdrop-blur-[2px]">
      <div className="text-left w-full">
        <p className="text-3xl font-bold underline underline-offset-8 mb-4">
          Recently on Spotify
        </p>
        <div className="p-6 w-full md:w-10/12 xl:w-8/12 backdrop-blur-[2px] rounded-xl mx-auto flex items-center justify-between gap-4">
          <img
            src={
              !track ? "https://dummyimage.com/64x64/ffffff/ffffff" : track.src
            }
            alt=""
            className="rounded-xl"
          />
          <div className="flex-grow flex flex-col items-end justify-center h-full text-right">
            <p className="text-2xl font-bold leading-none">
              {!track ? "loading..." : track.name}
            </p>
            <p className="text-sm">
              {!track
                ? "loading..."
                : track.artists.map((artist) => {
                    return (
                      <span key={artist.name}>
                        {artist.name} {","}
                      </span>
                    );
                  })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
