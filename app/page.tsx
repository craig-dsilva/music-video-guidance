import MusicListCard from "@/components/MusicListCard/MusicListCard";

import { getAllMusic } from "@/db/music";

const Home = async () => {
  const allMusicData = await getAllMusic();

  return (
    <main className="mx-5">
      {allMusicData.map((music, index) => (
        <MusicListCard
          key={index}
          title={music.title}
          artist={music.artist}
          date={music.date}
        />
      ))}
    </main>
  );
};

export default Home;
