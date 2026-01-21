import MusicListCard from "@/components/MusicListCard";
import type { musicInterface } from "./music/[slug]/page";

const Home = async () => {
  const data = await fetch("http://localhost:3000/api/music", {
    cache: "no-store",
  });
  const music = await data.json();

  return (
    <main className="mx-5">
      {music.data.map((music: musicInterface, index: number) => (
        <MusicListCard
          key={index}
          id={music._id}
          title={music.title}
          artist={music.artist}
          featuringArtist={music.featuringArtist}
        />
      ))}
    </main>
  );
};

export default Home;
