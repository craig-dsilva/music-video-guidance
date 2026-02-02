import Form from "next/form";

const addMusic = () => {
  return (
    <Form className="flex flex-col gap-2 px-5" action={""}>
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
      <label htmlFor="rating">Rating:</label>
      <select name="rating" id="rating" defaultValue="none">
        <option value="none">None</option>
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>
      {/* Content form */}
      <label htmlFor="age-restricted">Age restricted?:</label>
      <select name="age-restricted" id="age-restricted" defaultValue="no">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      <label htmlFor="notes">Notes:</label>
      <textarea className="mb-4" name="notes" id="notes"></textarea>
      <input className="bg-white" id="submit" type="submit" />
    </Form>
  );
};

export default addMusic;
