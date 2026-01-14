import Link from "next/link";
import Artists from "./Artists";

import type { ObjectId } from "mongodb";

interface MusicListCardInterface {
  id: ObjectId;
  title: string;
  artist: string[];
  featuringArtist: string[];
  date: string;
}

const MusicListCard = ({
  id,
  title,
  artist,
  featuringArtist,
  date,
}: MusicListCardInterface) => {
  return (
    <div className="mb-5">
      <Link href={`/music/${id}`}>
        <h3>{title}</h3>
      </Link>
      <Artists artists={artist} featuringArtists={featuringArtist} />
      <p>{date}</p>
    </div>
  );
};

export default MusicListCard;
