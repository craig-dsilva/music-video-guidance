import Link from "next/link";
import Artists from "./Artists";

interface MusicListCardInterface {
  id: ObjectId;
  title: string;
  artist: string[];
  featuringArtist: string[];
}

const MusicListCard = ({
  id,
  title,
  artist,
  featuringArtist,
}: MusicListCardInterface) => {
  return (
    <div className="mb-5">
      <Link href={`/music/${id}`}>
        <h2>{title}</h2>
      </Link>
      <Artists artists={artist} featuringArtists={featuringArtist} />
    </div>
  );
};

export default MusicListCard;
