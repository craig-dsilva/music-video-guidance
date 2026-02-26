import Form from "next/form";

const addMusicData = async (formData: FormData) => {
  "use server";

  const title = formData.get("title");
  const artist = formData.get("artist");
  const featuringArtist = formData.get("feat-artists") || null;
  const duration = formData.get("duration");
  const date = formData.get("release-date");
  const url = formData.get("link");
  const description = formData.get("description") || null;
  const views = formData.get("views");
  const rating = formData.get("rating");
  const contentData = formData.get("content");
  const isAgeRestricted = formData.get("age-restricted");
  const notes = formData.get("notes") || null;

  if (typeof contentData !== "string")
    throw new Error("content is missing or invalid");

  const content = contentData.split(";") || [];

  const data = {
    title,
    artist,
    featuringArtist,
    duration,
    date,
    url,
    description,
    views,
    rating,
    content,
    isAgeRestricted,
    notes,
  };

  try {
    await fetch("http://localhost:3000/api/music", {
      method: "POST",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
};

const addMusic = () => {
  return (
    <Form
      className="flex flex-col gap-2 px-5 lg:grid lg:grid-cols-[15rem_minmax(0,24rem)] lg:justify-center lg:gap-0 lg:gap-y-5"
      action={addMusicData}
    >
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" required />
      <label htmlFor="artist">Artists:</label>
      <input type="text" name="artist" id="artist" required />
      <label htmlFor="feat-artists">Featuring artists:</label>
      <input type="text" name="feat-artists" id="feat-artists" />
      <label htmlFor="duration">Duration:</label>
      <input type="number" name="duration" id="duration" required />
      <label htmlFor="release-date">Release Date:</label>
      <input type="date" name="release-date" id="release-date" required />
      <label htmlFor="link">YouTube Link:</label>
      <input type="url" name="link" id="link" required />
      <label htmlFor="description">Description:</label>
      <textarea name="description" id="description"></textarea>
      <label htmlFor="views">Views:</label>
      <input type="number" name="views" id="views" required />
      <label htmlFor="rating">Rating:</label>
      <select name="rating" id="rating" defaultValue="none">
        <option value="none">None</option>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>
      <label htmlFor="content">Content:</label>
      <i>Use ; to seperate points</i>
      <textarea
        className="lg:col-start-2"
        name="content"
        id="content"
      ></textarea>
      <label htmlFor="age-restricted">Age restricted?:</label>
      <select name="age-restricted" id="age-restricted" defaultValue="no">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label htmlFor="notes">Notes:</label>
      <textarea className="mb-4" name="notes" id="notes"></textarea>
      <input className="bg-white lg:col-start-2" id="submit" type="submit" />
    </Form>
  );
};

export default addMusic;
