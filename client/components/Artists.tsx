interface ArtistsInterface {
  artists: string[];
  featuringArtists?: string[];
}

const artistDisplay = (artist: string, index: number, arr: string[]) =>
  `${artist}${index + 1 !== arr.length ? "," : ""} `;

const Artists = ({ artists, featuringArtists }: ArtistsInterface) => {
  console.log(typeof artists);
  return (
    <div className="mb-5 flex flex-row gap-1">
      <div>{artists.map(artistDisplay)}</div>
      {featuringArtists && featuringArtists.length > 0 && (
        <p data-testid="feat">ft.</p>
      )}
      <div>{featuringArtists?.map(artistDisplay)}</div>
    </div>
  );
};

export default Artists;
