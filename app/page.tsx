import MusicListCard from "@/components/MusicListCard";

import { getAllMusic } from "@/db/music";

const Home = async () => {
  const allMusicData = await getAllMusic();

  return (
    <main className="mx-5">
      {allMusicData.map((music, index) => (
        <MusicListCard
          key={index}
          id={music._id}
          title={music.title}
          artist={music.artist}
          date={music.date}
        />
      ))}
    </main>
  );
};

export default Home;
