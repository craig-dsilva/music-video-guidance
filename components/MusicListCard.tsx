interface MusicListCardInterface {
  title: string;
  artist: string;
  date: string;
}

const MusicListCard = ({ title, artist, date }: MusicListCardInterface) => {
  return (
    <div className="mb-5">
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{date}</p>
    </div>
  );
};

export default MusicListCard;
