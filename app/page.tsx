import MusicListCard from "@/components/MusicListCard/MusicListCard";

import { getAllMusic } from "@/db/music";

const Home = async () => {
  const allMusicData = await getAllMusic();

  return (
    <div className="">
      <main className="">
        {allMusicData.map((music, index) => (
          <MusicListCard
            key={index}
            title={music.title}
            artist={music.artist}
            date={music.date}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
