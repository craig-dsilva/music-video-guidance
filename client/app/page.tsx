import MusicListCard from "@/components/MusicListCard";
import type { musicInterface } from "./music/[slug]/page";

const Home = async () => {
  return (
    <main className="mx-5">
      {/* {music.data.map((music: musicInterface, index: number) => (
        <MusicListCard
          key={index}
          id={music._id}
          title={music.title}
          artist={music.artist}
          featuringArtist={music.featuringArtist}
        />
      ))} */}
    </main>
  );
};

export default Home;
