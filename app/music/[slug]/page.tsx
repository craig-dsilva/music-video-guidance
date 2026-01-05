import { getMusic } from "@/db/music";

interface paramsInterface {
  params: Promise<{ slug: string }>;
}

const music = async ({ params }: paramsInterface) => {
  const { slug } = await params;
  const music = await getMusic(slug);

  const videoDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h4>{music.title}</h4>
      <h5>{music.artist}</h5>
      <iframe src={music.url} />
      <p>{music.description}</p>
      <p>Rating: {music.rating}</p>
      <ul>
        {music.content.map((e, i) => (
          <li key={i}>e</li>
        ))}
      </ul>
      <p>Is Age Restricted: {music.isAgeRestricted}</p>
      <p>
        Safe Alternative:{" "}
        {music.safeAlternative === "" ? "None" : music.safeAlternative}
      </p>
      <p>Views: {music.views}</p>
      <p>Duration: {videoDuration(music.duration)}</p>
    </div>
  );
};

export default music;
