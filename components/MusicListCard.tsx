import { ObjectId } from "mongodb";

import Link from "next/link";

interface MusicListCardInterface {
  id: ObjectId;
  title: string;
  artist: string;
  date: string;
}

const MusicListCard = ({ id, title, artist, date }: MusicListCardInterface) => {
  return (
    <div className="mb-5">
      <Link href={`/music/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{artist}</p>
      <p>{date}</p>
    </div>
  );
};

export default MusicListCard;
