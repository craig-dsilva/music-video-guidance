import Artists from "@/components/Artists";

interface paramsInterface {
  params: Promise<{ slug: string }>;
}

export interface musicInterface {
  _id: ObjectId;
  title: string;
  artist: string[];
  featuringArtist: string[];
  views: number;
  duration: number;
  date: string;
  url: string;
  description: string;
  rating: string;
  content: string[];
  notes: string;
  isAgeRestricted: string;
  safeAlternative: string;
}

const music = async ({ params }: paramsInterface) => {
  const { slug } = await params;

  const videoDuration = (duration: number) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="mx-5">
      <h4>{music.title}</h4>
      <Artists
        artists={music.artist}
        featuringArtists={music.featuringArtist}
      />
      <iframe className="mb-5" src={music.url} />
      <p>Description</p>
      <p className="mb-5">{music.description}</p>
      <p>Rating: {music.rating}</p>
      <ul>
        {music.content.map((c: string, i: number) => (
          <li className="px-2 py-5" key={i}>
            {c}
          </li>
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
