import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Artists from "../components/Artists";

describe("Artists", () => {
  const renderArtists = (artists: string[], featuringArtists: string[]) =>
    render(<Artists artists={artists} featuringArtists={featuringArtists} />);

  it("should render 'ft.' if there is a featuring artist", () => {
    const artists = ["Charlie Puth"];
    const featuringArtists = ["Selena Gomez"];

    renderArtists(artists, featuringArtists);

    const featEl = screen.getByText(/ft./);

    expect(featEl).toBeInTheDocument();
  });
});
