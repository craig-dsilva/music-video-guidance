import Link from "next/link";
import Artists from "./Artists";

import type { ObjectId } from "mongoose";

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
        <h3>{title}</h3>
      </Link>
      <Artists artists={artist} featuringArtists={featuringArtist} />
    </div>
  );
};

export default MusicListCard;
